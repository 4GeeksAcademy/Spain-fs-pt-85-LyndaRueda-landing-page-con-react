import React from 'react';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
