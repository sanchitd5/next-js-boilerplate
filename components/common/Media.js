import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(() => ({
  responsiveImage: {
    height: 'auto',
    maxWidth: '100%'
  }
}));

export const Image = (props) => {
  const classes = useStyles();
  return (<NextImage layout='fill' style={props.style !== undefined ? props.style instanceof Object ? props.style : {} : {}} className={classes.responsiveImage} src={props.src} alt={props.alt !== undefined ? props.alt : String(props.src)} />);
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  alt: PropTypes.string
};
