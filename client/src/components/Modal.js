//Code from https://github.com/dceddia/modal-in-react
import React, { Component } from 'react';
import removeCapturedImage from './Webcam'
import { hasClass, removeClass, addClass } from '../utils/dom';
import { prepareImageUploadData } from '../utils/dataPreparation';
import API from '../lib/APIClient';

class Modal extends React.Component {
  constructor(){
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendButtonClicked = this.sendButtonClicked.bind(this);
    this.cancelSendPhoto = this.cancelSendPhoto.bind(this);
  }

  openModal() {
    this.props.state.storeModalState(true);
    removeClass(document.getElementById('modal-window-container'), 'hidden');
  }

  closeModal() {
    this.props.state.storeModalState(false);
    addClass(document.getElementById('modal-window-container'), 'hidden');
  }

  cancelSendPhoto() {
    this.closeModal();
    this.props.state.resetWebcam(true);
  }

  sendButtonClicked() {
    var userInput = document.getElementById("contact-info").value;

    //TODO - validate these
    var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneRe = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/
    
    //Validate that input is an email address or phone number
    if (userInput != "" && emailRe.test(userInput)) {
        var contactInfo = {'type': 'email', 'value': userInput};
    }
    else if (userInput != "" && phoneRe.test(userInput)) {
      //convert number to E164 format for use with SNS - pulled from https://stackoverflow.com/questions/16748854/javascript-convert-phone-number-from-e164-to-international-format
      //TODO - this is broken - need to import these libraries
		//var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
		//var number = phoneUtil.parse(userInput, null);
		//var result = phoneUtil.format(number, com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat.INTERNATIONAL);
		//var contactInfo = {'type': 'phone', 'value': result}
    }
    else {
      var messageElement = document.getElementById("message");
      messageElement.style.visibility = "visible";
      messageElement.text = "Invalid Input";
      addClass(messageElement, "error");
      document.getElementById("contact-info").style.autoFocus = true;
      return;
    }

    var response = API.photos.uploadPhoto(prepareImageUploadData(this.props.state.webcam.photoData), contactInfo);

    setTimeout(function(){
      var messageElement = document.getElementById("message");
      messageElement.style.visibility = "visible";
      messageElement.text = "Success! The link to your photo has been sent to your " + contactInfo.type;
      addClass(messageElement, "success");
    }, 200);

    this.closeModal();

  }

  render() {
    return (
      <div id="modal-window-container" className="modal-window-container hidden">
        <div className="backdrop">
          <div className="modal-container">
            <button id="modal-close" onClick={this.cancelSendPhoto}>X</button>
            <center id="modal-heading">Send To Email or Phone Number</center>
            <input id="contact-info" autoFocus></input>
            <center id="message"></center>
            <div className="footer">
              <input id="send-button" type="image" src="/img/snsicon.png" onClick={this.sendButtonClicked}></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
