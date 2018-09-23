import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLane } from '../Lane/LaneActions';


const Kanban = (props) => (
  <div>
    <button className={styles.addLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })} >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

//Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
  lanes: state.lanes,
});

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapDispatchToProps = {
  createLane,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);