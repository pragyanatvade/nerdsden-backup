import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
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


class Modal extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: this.state.show
    });
  };

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
      if(!this.props.show){
          return null;
      }
      return (
        <div className="modal">
          <h1>Modal</h1>
          <button  onClick={e => {
                     this.showModal();
                }}>
                  show Modal </button>
        <Modal visible={this.state.showModal}>
          <p>{this.props.children}</p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
    );

  }
}
