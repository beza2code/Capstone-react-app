import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Jumbotron } from 'reactstrap';

function Home() {
 
  return (
    <div>
      <Jumbotron fluid>
        <h1>Welcome</h1>
        <p className="jumbotron-text">Bank from any where</p>
      </Jumbotron>
      <Cards />

<div id ="container">
  <div id ="animate"></div>
</div>


    </div>
  );
}

export default Home;