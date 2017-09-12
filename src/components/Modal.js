//Code from https://github.com/dceddia/modal-in-react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(){
    super();
    this.sendButtonClicked = this.sendButtonClicked.bind(this);
    this.closeButtonClicked = this.closeButtonClicked.bind(this);
  }

  closeButtonClicked() {
    this.props.onClose(null);
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
      document.getElementById("error-message").style.visibility = "visible";
      document.getElementById("contact-info").style.autoFocus = true;
      return;
    }
    this.props.onClose(contactInfo);
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: 'black',
      borderRadius: 5,
      maxWidth: 500,
      margin: '0 auto',
      padding: 20,
    };

    const centerStyle = {
      color: '#FFA717',
      fontSize: 'large',
      fontWeight: 300
    };

    const inputStyle = {
      width: '100%',
      marginTop: 20,
      marginBottom: 5,
      fontSize: 'xx-large',
      textAlign: 'center',
      background: 'black',
      borderColor: 'black',
      color: '#FFA717', 
      fontWeight: 'bold'
    };

    const buttonStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    const errorMessageStyle = {
      color: 'maroon',
      fontStyle: 'italic',
      fontWeight: 700,
      marginBottom: 5,
      visibility: 'hidden'
    }

    const modalClose = {
      color: '#FFA717',
      fontWeight: 'bold',
      background: 'black',
      borderColor: 'black',
      fontSize: 'large',
      marginTop: -20,
      marginLeft: -10
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <button className="modal-close" style={modalClose} onClick={this.closeButtonClicked}>X</button>
          <center style={centerStyle}>Send To Email or Phone Number</center>
          <input id="contact-info" style={inputStyle} autoFocus></input>
          <center id="error-message" style={errorMessageStyle}>Invalid Input</center>
          <div className="footer">
            <input id="send-button" type="image" style={buttonStyle} src="/img/snsicon.png" onClick={this.sendButtonClicked}></input>
          </div>
        </div>
      </div>
    );
  }
}
	/*
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
*/
export default Modal;
