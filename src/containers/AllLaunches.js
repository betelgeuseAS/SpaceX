import React, {Component} from 'react';
import { connect } from "react-redux";

import { fetchPastLaunchesResolver } from '../actions/pastLaunchesAction';
import { fetchUpcomingLaunchesResolver } from '../actions/upcomingLaunchesAction';

import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import {isEmptyArray} from "../components/helpers/helpers";

import { Menu } from "../components/Menu";
import PastLaunches from '../components/PastLaunches';
import UpcomingLaunches from '../components/UpcomingLaunches';

class AllLaunches extends Component {
  componentDidMount() {
    this.props.fetchPastLaunchesResolver();
    this.props.fetchUpcomingLaunchesResolver();
  }

  render() {
    const { pastLaunches, upcomingLaunches } = this.props;

    return (
      <>
        <Menu />

        <Container>
          <Row>
            <Col className="text-left">
              <h3>ALL LAUNCHES</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Tabs defaultActiveKey="past" id="uncontrolled-tab-example">
                <Tab eventKey="past" title="Past Launches">
                  {isEmptyArray(pastLaunches) ? <PastLaunches pastLaunchesData={pastLaunches} /> : <div>Loading...</div>}
                </Tab>
                <Tab eventKey="upcoming" title="Upcoming Launches">
                  {isEmptyArray(upcomingLaunches) ? <UpcomingLaunches upcomingLaunchesData={upcomingLaunches} /> : <div>Loading...</div>}
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  return {
    pastLaunches: store.pastLaunches,
    upcomingLaunches: store.upcomingLaunches
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchPastLaunchesResolver: () => dispatch(fetchPastLaunchesResolver()),
    fetchUpcomingLaunchesResolver: () => dispatch(fetchUpcomingLaunchesResolver())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLaunches);
