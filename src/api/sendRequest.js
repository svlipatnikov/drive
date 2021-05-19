export const imagesUrl = 'https://api-factory.simbirsoft1.com';
export const apiUrl = 'https://api-factory.simbirsoft1.com/api';

const sendRequest = async (url, method, body) => {
  try {
    const response = await fetch(apiUrl + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
      },
      body,
    });
    const error = new Error();
    if (!response.ok) {
      error.response = response;
      throw error;
    }
    const text = await response.text();
    if (text === '') {
      error.text = 'empty response data';
      throw error;
    } else {
      return JSON.parse(text);
    }
  } catch (error) {
    // TODO
    console.log(error);
  }
};

export default sendRequest;
