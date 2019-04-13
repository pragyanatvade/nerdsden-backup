import React, { Component } from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../Modal'
import addToMailChimp from 'gatsby-plugin-mailchimp'
const Checkmark = styled.div`
display: inline-block;
`
const Button = styled.div`
  display: inline-block;
  border-radius: 0.3em;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 4px ;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: -0.15em;
  z-index: 99;
  &:hover{
    background-color:#FF7F50;
  }


`
const Submit = styled.input`
  background: #f4511e	 !important;
  margin: 0 1em ;
  width: 15.9em;
  color: white !important;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 0.3em;
  transition: 0.2s;
  &:hover {
    background: #FF7F50	 !important;
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
