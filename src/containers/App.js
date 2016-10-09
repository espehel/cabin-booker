import React from 'react';
import {connect} from 'react-redux';

import CabinsOverview from './CabinsOverview';
import NavBar from '../components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <CabinsOverview />
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  cabins: state.cabins
});

export default connect(mapStateToProps)(App);