const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');
const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));
app.get('/api', (req, res) => {
  const options = {
    hostname: 'infura-ipfs.io',
    path: '/ipfs/QmRm77okU4qmYs4LnjrhiZ2FnEmYbriHrxjtZkVNgrZKFP',
    method: 'GET'
  };

  const protocol = options.protocol === 'https:' ? https : http;

  const proxyReq = protocol.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });
});

app.listen(3001, () => {
  console.log('Proxy server listening on port 3001');
});
