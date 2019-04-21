import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import { LaunchItem } from './LaunchItem';
import { SearchBar } from './SearchBar';
import { SortBar } from './SortBar';

class UpcomingLaunches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      data: this.props.upcomingLaunchesData
    };
  }

  updateData(config) {
    this.setState(config);
  };

  render() {
    const {term, data} = this.state;
    const {upcomingLaunchesData} = this.props;
    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col>
              <Row>
                <Col md="7">
                  <SearchBar term={term} data={upcomingLaunchesData} update={this.updateData.bind(this)} />
                </Col>
                <Col md="5">
                  <SortBar initialData={upcomingLaunchesData} data={data} update={this.updateData.bind(this)}/>
                </Col>
              </Row>
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

UpcomingLaunches.propTypes = {
  upcomingLaunchesData:	PropTypes.array.isRequired
};

UpcomingLaunches.defaultProps = {
  upcomingLaunchesData:	[]
};

export default UpcomingLaunches;

