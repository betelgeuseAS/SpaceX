import React from 'react';
import PropTypes from 'prop-types';

const PageOne = ({year,	photos, onYear}) => {
  return (
    <div>
      <div>
        <button	className='btn' onClick={(event) => {onYear(event)}}>2018</button>
        <button	className='btn' onClick={(event) => {onYear(event)}}>2017</button>
        <button	className='btn' onClick={(event) => {onYear(event)}}>2016</button>
        <button	className='btn' onClick={(event) => {onYear(event)}}>2015</button>
        <button	className='btn' onClick={(event) => {onYear(event)}}>2014</button>
      </div>
      <p>You have	{photos.length}	photo per	{year} year</p>
    </div>
  );
};

PageOne.propTypes = {
  year:	PropTypes.number.isRequired,
  photos:	PropTypes.array.isRequired,
  setYear:	PropTypes.func.isRequired,
};

PageOne.defaultProps = {
  year:	0,
  photos:	[],
  setYear:	() => {}
};

export default PageOne;
