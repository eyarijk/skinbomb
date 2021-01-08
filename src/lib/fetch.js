import axios from 'axios';

const fetch = async (path, options) => {
  const { method = 'get', data = null, headers = {} } = options || {};

  const defaultHeaders = {
    'Content-Type': 'multipart/form-data',
  };

  if (localStorage.getItem('token')) {
    defaultHeaders.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const requestParams = {
    // eslint-disable-next-line no-undef
    url: `https://api.skinbomb.gg/api${path}`,
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    data,
  };

  if (method === 'get') {
    delete requestParams.data;
  } else {
    requestParams.params = data;
  }

  try {
    const response = await axios(requestParams);

    return response.data;
  } catch (err) {
    console.error('> API error', err);
    throw err;
  }
};

export default fetch;
