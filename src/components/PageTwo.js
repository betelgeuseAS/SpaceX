import React from 'react';
import PropTypes from 'prop-types';

const PageTwo = ({name}) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

PageTwo.propTypes = {
  name:	PropTypes.string.isRequired,
};

PageTwo.defaultProps = {
  name: ''
};

export default PageTwo;
