import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
// import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, _id) => {
      return (
        <HornedBeast
          key={beast._id}
          image={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          openModal={this.props.openModal}
        />
      )
    });

    return (
      < main >
        <Row xs={1} sm={3} md={4} lg={5}>
          {beasts}
        </Row>
      </main >
    )
  }
}

export default Main;