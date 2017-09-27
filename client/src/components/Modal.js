//Code from https://github.com/dceddia/modal-in-react
import React, { Component } from 'react';
import removeCapturedImage from './Camera'
import { hasClass, removeClass, addClass } from '../utils/dom';
import { prepareImageUploadData } from '../utils/dataPreparation';
import API from '../lib/APIClient';

var Spinner = require('react-spinkit');

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
    this.props.state.resetCamera(true);
  }

  sendButtonClicked() {
    var self = this;
    var userInput = document.getElementById("contact-info").value;

    var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //Validate that input is an email address or phone number
    if (userInput != "" && emailRe.test(userInput)) {
        var contactInfo = {'type': 'email', 'value': userInput};
    }
    else {
      //convert number to E164 format for use with SNS - pulled from https://stackoverflow.com/questions/16748854/javascript-convert-phone-number-from-e164-to-international-format
		  var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
      var phoneNumberFormat = require('google-libphonenumber').PhoneNumberFormat;
		  try {
        //assume US if they haven't entered + as the first character
        var countryCode = "US";
        if (/^\+.*$/.test(userInput))  var countryCode = null;
        var number = phoneUtil.parse(userInput, countryCode);
		    var result = phoneUtil.format(number, phoneNumberFormat.E164);
		    var contactInfo = {'type': 'phone', 'value': result}
      }
      catch(error) {
        var messageElement = document.getElementById("message");
        messageElement.style.visibility = "visible";
        messageElement.textContent = "Invalid Phone Number: " + error.toString();
        addClass(messageElement, "error");
        document.getElementById("contact-info").style.autoFocus = true;
        return;
      }
    }

    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";
    document.getElementById("modal-heading").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("send-button").style.display = "none";
    var messageElement = document.getElementById("message");

    API.photos.uploadPhoto(prepareImageUploadData(self.props.state.camera.photoData), contactInfo)
      .then((response) => {
        spinner.style.visibility = "hidden";
        messageElement.style.visibility = "visible";
        messageElement.textContent = "Success! The link to your photo has been sent to your " + contactInfo.type;
        addClass(messageElement, "success");
        self.props.state.resetCamera(true);
        setTimeout(function(){
          self.closeModal();
        }, 2000);
      })
      .catch((error) => {
        spinner.style.visibility = "hidden";
        messageElement.style.visibility = "visible";
        messageElement.textContent = error.message;
        addClass(messageElement, "error");
        setTimeout(function(){
          document.getElementById("modal-heading").style.display = null;
          document.getElementById("contact-info").style.display = null;
          document.getElementById("send-button").style.display = null;
        }, 1000);
      });
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
              <Spinner id="spinner" name="line-spin-fade-loader" color="orange"/>
              <input id="send-button" type="image" src="/img/snsicon.png" onClick={this.sendButtonClicked}></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
