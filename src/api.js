import axios from 'axios';

export const getTranslation = async (
  sourceLanguage,
  targetLanguage,
  enteredText
) => {
  const res = await axios({
    baseURL: process.env.REACT_APP_BASE_URL,
    url: '/translate',
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_SUBSCRIPTION_KEY,
      'Ocp-Apim-Subscription-Region': process.env.REACT_APP_SUBSCRIPTION_REGION,
      'Content-type': 'application/json',
      'X-ClientTraceId': process.env.REACT_APP_TRACE_ID,
    },
    params: {
      'api-version': '3.0',
      from: sourceLanguage,
      to: targetLanguage,
    },
    data: [
      {
        text: enteredText,
      },
    ],
    responseType: 'json',
  });

  return res.data[0].translations[0];
};
