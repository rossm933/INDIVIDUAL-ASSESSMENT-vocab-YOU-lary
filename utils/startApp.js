import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import getVocab from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  getVocab(uid).then((vocab) => showVocab(vocab));
};
export default startApp;
