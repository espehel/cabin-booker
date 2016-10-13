import React from 'react';
import {connect} from 'react-redux';

import Calendar from '../components/calendar/Calendar';

const CabinPage = ({cabin}) => {

  if (!cabin) {
    return null;
  }

  return (
    <div>
      <h2>{cabin.name}</h2>
      <img className="responsive-img circle" src={cabin.img} />
      <p className="bold">Location: {cabin.location}</p>
      <p className="bold">Owner: {cabin.owner}</p>
      <Calendar year={2016} month={10}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cabin: state.cabins.find(cabin => cabin.id === ownProps.params.cabinid)
  };
};

export default connect(mapStateToProps)(CabinPage);