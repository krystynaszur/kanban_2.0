import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

import callApi from '../../util/apiCaller';

const Kanban = (props) => (
  <div className={styles.kanban}>
    <button className={styles.addLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })} >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
 
});

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
  fetchLanes: PropTypes.func,
};

const mapDispatchToProps = {
  //...laneActions,
//  addNote: createNote,
  createLane: createLaneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);