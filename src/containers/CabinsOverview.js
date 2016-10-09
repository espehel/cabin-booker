import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchCabins} from '../actions/index'
import CabinList from '../components/CabinList';

class CabinsOverview extends Component {

  componentWillMount() {
    this.props.fetchCabins(this.props.user);
  }

  render() {
    return (
    <div>
      <div className="row">
        <div className="col s12 l8 offset-l4">
          <h2>Your cabins:</h2>
        </div>
      </div>
      <CabinList cabins={this.props.cabins}/>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  cabins: state.cabins,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchCabins: (user) => {dispatch(fetchCabins(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(CabinsOverview);