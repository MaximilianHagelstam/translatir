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
                  <option value="af">Afrikaans</option>
                  <option value="am">Amharic</option>
                  <option value="ar">Arabic</option>
                  <option value="as">Assamese</option>
                  <option value="az">Azerbaijani</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bn">Bangla</option>
                  <option value="bs">Bosnian</option>
                  <option value="ca">Catalan</option>
                  <option value="cs">Czech</option>
                  <option value="cy">Welsh</option>
                  <option value="da">Danish</option>
                  <option value="de">German</option>
                  <option value="el">Greek</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="et">Estonian</option>
                  <option value="fa">Persian</option>
                  <option value="fi">Finnish</option>
                  <option value="fil">Filipino</option>
                  <option value="fj">Fijian</option>
                  <option value="fr">French</option>
                  <option value="fr-CA">French (Canada)</option>
                  <option value="ga">Irish</option>
                  <option value="gu">Gujarati</option>
                  <option value="he">Hebrew</option>
                  <option value="hi">Hindi</option>
                  <option value="hr">Croatian</option>
                  <option value="ht">Haitian Creole</option>
                  <option value="hu">Hungarian</option>
                  <option value="hy">Armenian</option>
                  <option value="id">Indonesian</option>
                  <option value="is">Icelandic</option>
                  <option value="it">Italian</option>
                  <option value="iu">Inuktitut</option>
                  <option value="ja">Japanese</option>
                  <option value="kk">Kazakh</option>
                  <option value="km">Khmer</option>
                  <option value="kmr">Kurdish (Northern)</option>
                  <option value="kn">Kannada</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish (Central)</option>
                  <option value="lo">Lao</option>
                  <option value="lt">Lithuanian</option>
                  <option value="lv">Latvian</option>
                  <option value="mg">Malagasy</option>
                  <option value="mi">Māori</option>
                  <option value="ml">Malayalam</option>
                  <option value="mr">Marathi</option>
                  <option value="ms">Malay</option>
                  <option value="mt">Maltese</option>
                  <option value="mww">Hmong Daw</option>
                  <option value="my">Myanmar (Burmese)</option>
                  <option value="nb">Norwegian</option>
                  <option value="ne">Nepali</option>
                  <option value="nl">Dutch</option>
                  <option value="or">Odia</option>
                  <option value="otq">Querétaro Otomi</option>
                  <option value="pa">Punjabi</option>
                  <option value="pl">Polish</option>
                  <option value="prs">Dari</option>
                  <option value="ps">Pashto</option>
                  <option value="pt">Portuguese (Brazil)</option>
                  <option value="pt-PT">Portuguese (Portugal)</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="sm">Samoan</option>
                  <option value="sq">Albanian</option>
                  <option value="sr-Cyrl">Serbian (Cyrillic)</option>
                  <option value="sr-Latn">Serbian (Latin)</option>
                  <option value="sv">Swedish</option>
                  <option value="sw">Swahili</option>
                  <option value="ta">Tamil</option>
                  <option value="te">Telugu</option>
                  <option value="th">Thai</option>
                  <option value="ti">Tigrinya</option>
                  <option value="tlh-Latn">Klingon (Latin)</option>
                  <option value="tlh-Piqd">Klingon (pIqaD)</option>
                  <option value="to">Tongan</option>
                  <option value="tr">Turkish</option>
                  <option value="ty">Tahitian</option>
                  <option value="uk">Ukrainian</option>
                  <option value="ur">Urdu</option>
                  <option value="vi">Vietnamese</option>
                  <option value="yua">Yucatec Maya</option>
                  <option value="yue">Cantonese (Traditional)</option>
                  <option value="zh-Hans">Chinese Simplified</option>
                  <option value="zh-Hant">Chinese Traditional</option>
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
                  <option value="af">Afrikaans</option>
                  <option value="am">Amharic</option>
                  <option value="ar">Arabic</option>
                  <option value="as">Assamese</option>
                  <option value="az">Azerbaijani</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bn">Bangla</option>
                  <option value="bs">Bosnian</option>
                  <option value="ca">Catalan</option>
                  <option value="cs">Czech</option>
                  <option value="cy">Welsh</option>
                  <option value="da">Danish</option>
                  <option value="de">German</option>
                  <option value="el">Greek</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="et">Estonian</option>
                  <option value="fa">Persian</option>
                  <option value="fi">Finnish</option>
                  <option value="fil">Filipino</option>
                  <option value="fj">Fijian</option>
                  <option value="fr">French</option>
                  <option value="fr-CA">French (Canada)</option>
                  <option value="ga">Irish</option>
                  <option value="gu">Gujarati</option>
                  <option value="he">Hebrew</option>
                  <option value="hi">Hindi</option>
                  <option value="hr">Croatian</option>
                  <option value="ht">Haitian Creole</option>
                  <option value="hu">Hungarian</option>
                  <option value="hy">Armenian</option>
                  <option value="id">Indonesian</option>
                  <option value="is">Icelandic</option>
                  <option value="it">Italian</option>
                  <option value="iu">Inuktitut</option>
                  <option value="ja">Japanese</option>
                  <option value="kk">Kazakh</option>
                  <option value="km">Khmer</option>
                  <option value="kmr">Kurdish (Northern)</option>
                  <option value="kn">Kannada</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish (Central)</option>
                  <option value="lo">Lao</option>
                  <option value="lt">Lithuanian</option>
                  <option value="lv">Latvian</option>
                  <option value="mg">Malagasy</option>
                  <option value="mi">Māori</option>
                  <option value="ml">Malayalam</option>
                  <option value="mr">Marathi</option>
                  <option value="ms">Malay</option>
                  <option value="mt">Maltese</option>
                  <option value="mww">Hmong Daw</option>
                  <option value="my">Myanmar (Burmese)</option>
                  <option value="nb">Norwegian</option>
                  <option value="ne">Nepali</option>
                  <option value="nl">Dutch</option>
                  <option value="or">Odia</option>
                  <option value="otq">Querétaro Otomi</option>
                  <option value="pa">Punjabi</option>
                  <option value="pl">Polish</option>
                  <option value="prs">Dari</option>
                  <option value="ps">Pashto</option>
                  <option value="pt">Portuguese (Brazil)</option>
                  <option value="pt-PT">Portuguese (Portugal)</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="sm">Samoan</option>
                  <option value="sq">Albanian</option>
                  <option value="sr-Cyrl">Serbian (Cyrillic)</option>
                  <option value="sr-Latn">Serbian (Latin)</option>
                  <option value="sv">Swedish</option>
                  <option value="sw">Swahili</option>
                  <option value="ta">Tamil</option>
                  <option value="te">Telugu</option>
                  <option value="th">Thai</option>
                  <option value="ti">Tigrinya</option>
                  <option value="tlh-Latn">Klingon (Latin)</option>
                  <option value="tlh-Piqd">Klingon (pIqaD)</option>
                  <option value="to">Tongan</option>
                  <option value="tr">Turkish</option>
                  <option value="ty">Tahitian</option>
                  <option value="uk">Ukrainian</option>
                  <option value="ur">Urdu</option>
                  <option value="vi">Vietnamese</option>
                  <option value="yua">Yucatec Maya</option>
                  <option value="yue">Cantonese (Traditional)</option>
                  <option value="zh-Hans">Chinese Simplified</option>
                  <option value="zh-Hant">Chinese Traditional</option>
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
