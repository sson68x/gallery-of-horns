// 1. Start by importing React
import React from 'react';

// 2. Declare the class Component
class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
      <p>{this.props.description}</p>
      </>
    )
  }
}

// 3. Export class
export default HornedBeast;