import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../Modal'
import addToMailChimp from 'gatsby-plugin-mailchimp'
const Checkmark = styled.div`
display: inline-block;
`
const Button = styled.div`
  background: #1E90FF;
  width: 4em;
  display: inline;
  margin:  auto;
  cursor: pointer;
  color: white;
  padding: 0.4em;
  border-radius: 0.1em;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #00BFFF;
  }

`
const Submit = styled.input`
  background: #1E90FF	 !important;
  margin: 0 1em ;
  width: 15.9em;
  color: white !important;
  padding: 0.3em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #00BFFF	 !important;
  }
    @media only screen and (max-width: 40em) {
    width: 88%;

  }

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

  render() {
    return (
  <main>
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
        <label >
      <h2>Like This Article ?<br/><br/>
      Your more interesting inbox awaits:</h2>
          <input type="email" size='30' value={this.state.value} onChange={this.handleChange} placeholder="Email" />
        </label><br/><br/>
        <Submit type="submit" value="Submit" size='30' />
</center>
      </form>
      </Modal>
      <Button  onClick={this.showModal}>
Stay Updated
</Button>
</main>
    );
  }
}
SubscribeForm.propTypes = {
  data: PropTypes.object,
}
export default SubscribeForm
