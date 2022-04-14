import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import './App.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: '',
      title: '',
      description: ''
    }
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  openModal = (image, title, description) => {
    this.setState({
      showModal: true,
      image: image,
      title: title,
      description: description
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          openModal={this.openModal}
          image={this.state.image}
          title={this.state.title}
          description={this.state.description}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          image={this.state.image}
          title={this.state.title}
          description={this.state.description}
        />
        <Footer />
      </>
    )
  }
}

export default App;