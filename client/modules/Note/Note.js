import React, { PropTypes } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Note.css';

const Note = props =>
  <li className={styles.Note}>{props.children}</li>;



Note.propTypes = {
  //children: PropTypes.any,
};

export default Note;