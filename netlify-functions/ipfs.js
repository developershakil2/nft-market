const axios = require('axios');

exports.handler = async function(event, context) {
  const url = `https://infura-ipfs.io${event.path}`;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Preflight-Max-Age': 86400,
    'Access-Control-Allow-Age': 86400,
  };

  try {
    const response = await axios.get(url, { headers });
    const contentType = response.headers['content-type'];
    const data = response.data;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        ...headers,
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.response.data,
    };
  }
};



// https://github.com/Rob--W/cors-anywhere/