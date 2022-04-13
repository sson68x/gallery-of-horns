import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
          {data.map((beast) =>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              key={beast._id}
            />
          )}
      </main>
    )
  }
}

export default Main;