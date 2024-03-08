import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
// Navigation events
const navigationEvents = (uid) => {
// logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // filter buttons
  // All cards
  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-card')) {
      addVocabForm({}, uid);
    }
  });
};

export default navigationEvents;
