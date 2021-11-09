import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
import {
  FormControl,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Button,
  Typography,
} from '@material-ui/core';

// redux
import {initialState, updateNewDrive, resetNewDrive} from '../../store/slices/newDrive';
import { useDispatch, useSelector } from 'react-redux';
import {getNewDrive} from '../../store/selectors/newDrive';

// router
import { useHistory } from "react-router-dom";
import {routeKeys} from '../../routes';

// translations
import useT from '../../utils/translation';

// form validation
import { useFormik } from 'formik';
import * as yup from 'yup';

// styling
import { useStyles, WhiteBox, ButtonsContainer } from './styles';

const DriveVerifyView = () => {
  const newDriveState = useSelector(getNewDrive); 
  const dispatch = useDispatch();

  // Translated labels
  const title = useT('Confirm drive');
  const errorTitle = useT('Please correct the following error(s):');
  const traveledT = useT('traveled');
  const submit = useT('Submit');
  const reset = useT('Reset');

  const classes = useStyles();

  return (
    <Page title="Drive">
      <Container className={classes.container} maxWidth="md">
        <form className={classes.formContainer}>
        <Typography variant="h2" component="h2" className={classes.title}>
            {title}
          </Typography>
        </form>
      </Container>
    </Page>
  );
};

export default DriveVerifyView;
