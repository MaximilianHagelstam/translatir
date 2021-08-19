import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getTranslation } from './api';
import TranslationCard from './TranslatedCard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MaximilianHagelstam">
        Maximilian Hagelstam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function App() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [enteredText, setEnteredText] = useState('');

  const [translatedText, setTranslatedText] = useState('');

  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();

    const translation = await getTranslation(
      sourceLanguage,
      targetLanguage,
      enteredText
    );

    setTranslatedText(translation.text);
  };

  const onChangeSourceLanguage = (e) => {
    setSourceLanguage(e.target.value);
  };

  const onChangeTargetLanguage = (e) => {
    setTargetLanguage(e.target.value);
  };

  const onChangeEnteredText = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Translatir
        </Typography>

        <br />
        <br />

        <form onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-from-native-simple">
                  From
                </InputLabel>
                <Select
                  native
                  value={sourceLanguage}
                  onChange={onChangeSourceLanguage}
                  label="From"
                  inputProps={{
                    name: 'sourceLanguage',
                    id: 'outlined-from-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="fi">Finnish</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-to-native-simple">To</InputLabel>
                <Select
                  native
                  value={targetLanguage}
                  onChange={onChangeTargetLanguage}
                  label="To"
                  inputProps={{
                    name: 'targetLanguage',
                    id: 'outlined-no-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="fi">Finnish</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                id="enteredText"
                label="Enter Text"
                name="enteredText"
                autoComplete="etext"
                onChange={onChangeEnteredText}
              />
            </Grid>
          </Grid>

          <br />
          <TranslationCard translatedText={translatedText} />
          <br />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Translate
          </Button>
        </form>
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
