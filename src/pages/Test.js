import React from "react";
import Modal from "../components/Modal/Modal";
class App extends React.Component {
    state = {
      show: false
    };
    showModal = e => {
      this.setState({
        show: true
      });
    };
    closeModal = () => {
      this.setState({ showModal: false })
    }

  render() {
    return (
                <Button onClick={this.showModal}>show</Button>
                        <Modal visible={this.state.showModal}>
                          <Button onClick={this.closeModal}>Okay</Button>
                </Modal>      </div>
    );
  }
}
export default App;
