import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe"



// use the render prop and your custom form
const Form = () => (
  <MailchimpSubscribe
    url={siteUrl},
    render={({ subscribe, status, message }) => (
      <div>
        <MyForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)
export default Form
