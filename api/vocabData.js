import client from '../utils/client';

const endpoint = client.databaseURL;
// Get Vocab
const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// Delete Vocab
// Get Single Card
// Create Card
// Update Card
// Filter Cards by Language
export default getVocab;
