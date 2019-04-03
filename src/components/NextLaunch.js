import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';

// import Moment from 'react-moment';
// import 'moment-timezone';
import moment from 'moment';

import './NextLaunch.sass';

import { Container, Row, Col } from 'react-bootstrap';

let timer;
class NextLaunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      launchDate: props.launchData.launch_date_local
    };
  }

  componentDidMount() {
    timer = setInterval(() => this.getLaunchTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(timer);
  }

  getLaunchTime() {
    const now = moment();
    const liftoff = moment(this.state.launchDate);
    const diff = liftoff.diff(now);
    const diffDuration = moment.duration(diff);

    this.setState({
      days: diffDuration
        .days()
        .toString()
        .padStart(2, '0'),
      hours: diffDuration
        .hours()
        .toString()
        .padStart(2, '0'),
      minutes: diffDuration
        .minutes()
        .toString()
        .padStart(2, '0'),
      seconds: diffDuration
        .seconds()
        .toString()
        .padStart(2, '0'),
    });
  }

  // const [date, setDate] = useState(String(moment().format('LTS')));
  // const [load, setLoad] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(date => moment().format('LTS'));
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  render () {
    const { launchData } = this.props;
    return (
      <>
        <Container>
          <Row>
            <Col className="text-left">
              <h3>NEXT LAUNCH</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="time">{this.state.days ? this.state.days : '00'}</div>
              <div className="description">Days</div>
            </Col>
            <Col>
              <div className="time">{this.state.hours ? this.state.hours : '00'}</div>
              <div className="description">Hours</div>
            </Col>
            <Col>
              <div className="time">{this.state.minutes ? this.state.minutes : '00'}</div>
              <div className="description">Minutes</div>
            </Col>
            <Col>
              <div className="time">{this.state.seconds ? this.state.seconds : '00'}</div>
              <div className="description">Seconds</div>
            </Col>
          </Row>

          <Row>
            <Col className="text-left">
              <div><strong>Mission Name: </strong>{launchData.mission_name}</div>
              <div><strong>Launch Date: </strong>{launchData.launch_date_local}</div>
              <div><strong>Launch Site: </strong>{launchData.launch_site.site_name_long}</div>
            </Col>
            <Col className="text-right">
              <div><strong>Rocket: </strong>{launchData.rocket.rocket_name}</div>
              <div><strong>Payload Type: </strong>{launchData.rocket.second_stage.payloads[0].payload_type}</div>
              <div><strong>Manufacturer: </strong>{launchData.rocket.second_stage.payloads[0].manufacturer}</div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

NextLaunch.propTypes = {
  launchData:	PropTypes.object.isRequired
};

NextLaunch.defaultProps = {
  launchData:	{}
};

export default NextLaunch;
