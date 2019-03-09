import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import addToMailChimp from 'gatsby-plugin-mailchimp'
const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
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
    background: ${props => props.theme.colors.highlight};
  }
`
const Submit = styled.input`
  background: #6495ed !important;
  margin: 0 1em ;
  color: white !important;
  padding: 0.3em;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`
const Modal = styled.div`
  background: #DCDCDC	;
  padding: 1.5em;
  border-radius: 1em;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`
class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', showModal: true,};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A email was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// class SubscribeForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: '',
//     email: '',
//     showModal: false,
//     modalMessage: '',
//   }
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleResponse = this.handleResponse.bind(this);
//   }
//
//   handleChange(event) {
//     console.log('email');
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     const { email } = this.state
//     console.log('email', this.state)
//     addToMailChimp(email).then(
//       this.handleResponse
//     )
//     event.preventDefault();
//   }
//   handleResponse = resp => {
//     const { email } = this.state
//     if (resp.result === 'success') {
//       this.setState({
//         showModal: true,
//         modalMessage: `Subscription Successful`,
//       })
//     } else {
//       this.setState({
//         showModal: true,
//         modalMessage: `Oops! Subscription Was Unsuccessful`,
//       })
//     }
//   }
//   closeModal = () => {
//     this.setState({ showModal: false })
//   }
//
//
//   render() {
//     return (
//       <form
//       onSubmit={this.handleSubmit}
//       overlay={this.state.showModal}
//         onClick={this.closeModal}
//         >
//         <label>
//           Email:
//           <input type="email" value={this.state.value} onChange={this.handleChange} />
//         </label>
//   <Submit name="submit" type="submit" value="Send" />
//           <Modal visible={this.state.showModal}>
//           <p>{this.state.modalMessage}</p>
//           <Button onClick={this.closeModal}>Okay</Button>
//         </Modal>
//       </form>
//     );
//   }
// }
// SubscribeForm.propTypes = {
//   data: PropTypes.object,
// }
export default SubscribeForm
