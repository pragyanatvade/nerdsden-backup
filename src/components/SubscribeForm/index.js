import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../Modal'
import addToMailChimp from 'gatsby-plugin-mailchimp'
const Checkmark = styled.div`
display: inline-block;
`
const Button = styled.div`
  background: #FF7F50;
  font-size: 1em;
  display: inline;
  margin:  auto;
  cursor: pointer;
  color: white;
  padding: 0.4em;
  border-radius: 0.5em;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #FFA500;
  }
`
const Submit = styled.input`
  background: #FF7F50 !important;
  margin: 0 1em ;
  width: 12.3em;
  color: white !important;
  padding: 0.3em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #FFA500 !important;

`

class SubscribeForm extends Component {
  state = { show: false };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
                 };
  }
    showModal = () => {
        this.setState({
            show: true
        });
    }


      hideModal = () => {
          this.setState({
              show: false
          });
      }



  handleInputChange(event) {
    const target = event.target
    const value = target.value
    this.setState({
      [email]: value,
    })
  }

  handleSubmit(event) {
const { email} = this.state
console.log('email', this.state)
addToMailChimp(email, { FNAME: name, LNAME: message }).then(
  this.handleResponse
)

event.preventDefault()
}

handleResponse = resp => {
  const { name } = this.state
  if (resp.result === 'success') {
    this.setState({
      showModal: true,
      modalMessage: `Thanks ${name}!\nWe appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often.`,
    })
  } else {
    this.setState({
      showModal: true,
      modalMessage: `I am really sorry ${name}. \nNerd's Den is in very early stage of development.
      This may cause you face certain issues while contacting me. Please mail me at <a href="mailto:nerdsden@vadelabs.com?Subject=Contact Form Issue" target="_top">nerdsden@vadelabs.com</a>, I will respond to you promptly.`,
    })
  }
}
  render() {
    return (
  <div>
      <Modal
          className="modal"
          show={this.state.show}
          handleClose={this.hideModal}>
      <form
        name="subscribe"
        onSubmit={this.handleSubmit}
        overlay={this.state.showModal}
        onClick={this.closeModal}>
  <center>
        <label>
      <h2>Like This Article ?<br/><br/>
      Don't Miss The New Ones:</h2>
          <input type="email" size="23" value={this.state.value} onChange={this.handleChange} placeholder="Email"/>
        </label><br/><br/>
        <Submit type="submit" value="Submit" />
</center>
      </form>
      </Modal>
      <Button  onClick={this.showModal}>
        Subscribe Us
      </Button>
</div>
    );
  }
}
SubscribeForm.propTypes = {
  data: PropTypes.object,
}
export default SubscribeForm
