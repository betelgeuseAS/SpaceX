import React, {Component} from 'react';
import {connect} from "react-redux";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { Menu } from '../components/Menu';
import { Mission } from '../components/Mission';

import { fetchOneMissionResolver } from "../actions/missionsAction";
import { isEmptyObject } from "../components/helpers/helpers";

class Missions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionId: ''
    }
  }

  handleGetMissionById = () => {
    console.log(this.state.missionId);
    this.props.fetchOneMissionResolver(this.state.missionId);
  };

  handleChangeMissionId = (event) => {
    this.setState({missionId: event.target.value});
  };

  render() {
    const { missionId } = this.state;
    const { mission } = this.props;
    return (
      <>
        <Menu />

        <Container>
          <Row>
            <Col>
              <Form className="text-left">
                <Form.Group controlId="missionId">
                  <Form.Label>Enter Mission id:</Form.Label>
                  <Row>
                    <Col md="10">
                      <Form.Control type="text" onChange={this.handleChangeMissionId} value={missionId} placeholder="Mission id..." valid="false" />
                    </Col>
                    <Col md="2" className="text-right">
                      <Button variant="primary" type="button" onClick={this.handleGetMissionById}>Submit</Button>
                    </Col>
                  </Row>
                  <Form.Text className="text-muted">
                    Example: <span>F3364BF, EE86F74, CE91D46, 593B499, 9D1B7E0, FE3533D, F4F83DE, 2CF444A, F7709F2</span>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>

        {isEmptyObject(mission) ? <Mission mission={mission} /> : <div>Nothing show.</div>}
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  return {
    mission: store.mission
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchOneMissionResolver: (id) => dispatch(fetchOneMissionResolver(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
