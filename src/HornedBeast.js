import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Likes: 0,
    };
  }

  handleLikes = () => {
    this.setState({
      Likes: this.state.Likes + 1
    })
    this.props.openModal(this.props.image, this.props.title, this.props.description);
  };

  render() {
    return (
    <Col className="mb-5">
      <Card className="h-100">
        <Card.Header>
          <h3>{this.props.title}</h3>
        </Card.Header>
        <Card.Img
          src={this.props.image}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handleLikes}
        />
        <Card.Body>
          <Card.Text>
            <p>{this.state.Likes}Likes❤️</p>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    )
  }
}

export default HornedBeast;