import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// API route handler
export default async function handler(req, res) {
  // Run the CORS middleware
  await cors(req, res);

  // Make the API request
  const response = await fetch('https://infura-ipfs.io/ipfs/QmRm77okU4qmYs4LnjrhiZ2FnEmYbriHrxjtZkVNgrZKFP');

  // Return the API response
  res.status(response.status).json(await response.json());
}
