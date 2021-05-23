const sendRequest = async (url, method, body) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
      },
      body: JSON.stringify(body),
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
    console.log('error response', error.response);
    console.log('error text', error.text);
    return null;
  }
};

export default sendRequest;
