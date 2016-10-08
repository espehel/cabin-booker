import React from 'react';
import {connect} from 'react-redux';

import CabinsOverview from './CabinsOverview';

const App = ({cabins}) => {
    return (
        <div>
            <h1>Cabin booker</h1>
            <CabinsOverview />
        </div>
    );
}


const mapStateToProps = state => ({
  cabins: state.cabins
});

export default connect(mapStateToProps)(App);