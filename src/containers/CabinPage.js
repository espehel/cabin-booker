import React from 'react';
import {connect} from 'react-redux';

const CabinPage = ({cabin}) => {
  return (
    <div>
      <h2>{cabin.name}</h2>
      <img className="responsive-img circle" src={cabin.img} />
      <p className="bold">Location: {cabin.location}</p>
      <p className="bold">Owner: {cabin.owner}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cabin: state.cabins.find(cabin => cabin.id === ownProps.params.cabinid)
  };
};

export default connect(mapStateToProps)(CabinPage);