import React, { /*useState, useEffect, */Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';

import './Launch.sass';

let timer;
class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      launchDate: props.nextLaunchData.launch_date_local
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
    const { nextLaunchData } = this.props;
    const { days, hours, minutes, seconds } = this.state;
    return (
      <>
        <Container className="nextLaunch">
          <Row>
            <Col className="text-left">
              <h3>NEXT LAUNCH</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="time">{days ? days : '00'}</div>
              <div className="description">{days > 1 ? 'Days' : 'Day'}</div>
            </Col>
            <Col>
              <div className="time">{hours ? hours : '00'}</div>
              <div className="description">{hours > 1 ? 'Hours' : 'Hour'}</div>
            </Col>
            <Col>
              <div className="time">{minutes ? minutes : '00'}</div>
              <div className="description">{minutes > 1 ? 'Minutes' : 'Minute'}</div>
            </Col>
            <Col>
              <div className="time">{seconds ? seconds : '00'}</div>
              <div className="description">{seconds > 1 ? 'Seconds' : 'Second'}</div>
            </Col>
          </Row>

          <Row>
            <Col className="text-left">
              <div><strong>Mission Name: </strong>{nextLaunchData.mission_name}</div>
              <div><strong>Launch Date: </strong>{nextLaunchData.launch_date_local}</div>
              <div><strong>Launch Site: </strong>{nextLaunchData.launch_site.site_name_long}</div>
            </Col>
            <Col className="text-right">
              <div><strong>Rocket: </strong>{nextLaunchData.rocket.rocket_name}</div>
              <div><strong>Payload Type: </strong>{nextLaunchData.rocket.second_stage.payloads[0].payload_type}</div>
              <div><strong>Manufacturer: </strong>{nextLaunchData.rocket.second_stage.payloads[0].manufacturer}</div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Launch.propTypes = {
  nextLaunchData:	PropTypes.object.isRequired
};

Launch.defaultProps = {
  nextLaunchData:	{}
};

export default Launch;
