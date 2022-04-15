import React from 'react';
import Header from './Header';
import Forms from './Forms';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: '',
      title: '',
      description: '',
      filteredData: data
    };
  }

  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  openModal = (image, title, description) => {
    this.setState({
      showModal: true,
      image: image,
      title: title,
      description: description
    });
  }

  handleForm = event => {
    let horns = parseInt(event.target.value);
    this.setState ({
      horns: horns,
      sort: event.target.value
    });
    if(horns) {
      let newData = data.filter(element => element.horns === horns);
      this.setState({filteredData: newData});
    } else {
      this.setState({filteredData: data});
    }
  } 

  render() {
    return (
      <>
        <Header />
        <Forms handleForm={this.handleForm}/>
        <Main
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          openModal={this.openModal}
          image={this.state.image}
          title={this.state.title}
          description={this.state.description}
          filteredData={this.state.filteredData}
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