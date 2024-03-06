import { signOut } from '../utils/auth';
import getVocab from '../api/vocabData';
import showVocab from '../pages/vocab';

// Navigation events
const navigationEvents = () => {
// logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // filter buttons
  // All cards
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });
};

export default navigationEvents;
