import React from 'react';
import {connect} from 'react-redux';

import CabinsOverview from './CabinsOverview';
import NavBar from '../components/NavBar';

const App = ({children}) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        {children}
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  cabins: state.cabins
});

export default connect(mapStateToProps)(App);