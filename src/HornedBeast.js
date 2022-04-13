// 1. Start by importing React
import React from 'react';
import './HornedBeast.css';


// 2. Declare the class Component
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
    });
  }

  render() {
    return (
      <article className='Beasts'>
        <h2>{this.props.title}</h2>
        <p>
        {this.state.Likes}Likes❤️<span onClick={this.handleLikes}> CLICK YOUR FAVORITE IMAGE</span>
        </p>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handleLikes}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

// 3. Export class
export default HornedBeast;