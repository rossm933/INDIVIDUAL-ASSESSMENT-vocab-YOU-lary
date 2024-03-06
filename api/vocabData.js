import client from '../utils/client';

const endpoint = client.databaseURL;
// Get Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Delete Vocab
// Get Single Card
// Create Card
// Update Card
// Filter Cards by Language
export default getVocab;
