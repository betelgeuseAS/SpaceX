import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import { LaunchItem } from './LaunchItem';
import { SearchBar } from './SearchBar';

class PastLaunches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      data: this.props.pastLaunchesData
    };
  }

  updateData(config) {
    this.setState(config);
  };

  render() {
    const {term, data} = this.state;
    const {pastLaunchesData} = this.props;
    return (
      <>
        <Container>
          <Row>
            <Col>
              <SearchBar term={term} data={pastLaunchesData} update={this.updateData.bind(this)}/>
            </Col>
          </Row>

          <Row>
            <Col>
              {
                data.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))
              }
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

PastLaunches.propTypes = {
  pastLaunchesData:	PropTypes.array.isRequired
};

PastLaunches.defaultProps = {
  pastLaunchesData:	[]
};

export default PastLaunches;
