import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

// Click event for submitting form for adding a card
const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_id: document.querySelector('#language_id').value,
        timeSubmitted: Date(Date.now),
        uid,
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      });
    }
    // Click event for editing a card
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_id: document.querySelector('#language_id').value,
        timeSubmitted: Date(Date.now),
        firebaseKey,
        uid,
      };
      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocab(vocab, uid));
      });
    }
  });
};

export default formEvents;
