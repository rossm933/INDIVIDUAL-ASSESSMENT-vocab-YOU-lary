import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import filterButtons from '../components/buttons/filterButton';
import filterEvents from '../events/filterEvents';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  formEvents(uid);
  navigationEvents(uid);
  filterButtons();
  filterEvents(uid);
  getVocab(uid).then((vocab) => showVocab(vocab, uid));
};
export default startApp;
