import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

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
    return (
      <div>
        {this.state.days ? this.state.days : '00'}:
        {this.state.hours ? this.state.hours : '00'}:
        {this.state.minutes ? this.state.minutes : '00'}:
        {this.state.seconds ? this.state.seconds : '00'}
      </div>
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
