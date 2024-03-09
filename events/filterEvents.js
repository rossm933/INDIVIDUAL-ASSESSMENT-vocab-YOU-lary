import {
  getHtmlVocab, getVocab, getJavaVocab, getCssVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';

//  FILTER ALL THE VOCAB CARDS
const filterEvents = (uid) => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
  // FILTER HTML CARDS
  document.querySelector('#html-vocab').addEventListener('click', () => {
    getHtmlVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
  // FILTER JAVA CARDS
  document.querySelector('#java-vocab').addEventListener('click', () => {
    getJavaVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
  // FILTER CSS CARDS
  document.querySelector('#css-vocab').addEventListener('click', () => {
    getCssVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
};

export default filterEvents;
