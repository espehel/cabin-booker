import React from 'react';
import {connect} from 'react-redux';
import {bookCabins} from '../actions/index';

import Calendar from '../components/calendar/Calendar';

const CabinPage = ({cabin, onDayClick}) => {

  if (!cabin) {
    return null;
  }

  return (
    <div>
      <h2>{cabin.name}</h2>
      <img className="responsive-img circle" src={cabin.img} />
      <p className="bold">Location: {cabin.location}</p>
      <p className="bold">Owner: {cabin.owner}</p>
      <Calendar year={2016} month={10} onDayClick={(date) => onDayClick(cabin.id, "user1", date)} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cabin: state.cabins.find(cabin => cabin.id === ownProps.params.cabinid)
  };
};

const mapDispatchToProps = dispatch => ({
  onDayClick: (cabinId, userId, date) => dispatch(bookCabins(cabinId, userId, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(CabinPage);