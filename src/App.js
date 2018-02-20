import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList'
import Painting from './Painting'
import paintingData from './test'

class App extends Component {
  render() {
    // console.log(paintingData)
    return (
      <div className="App">
          <Painting image={paintingData.image_url}
                    name={paintingData.name}
                    artist={paintingData.artist}/>
          <CommentList comments={paintingData.comments}/>
      </div>
    );
  }
}

export default App;
