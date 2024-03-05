import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
// App opens with these functions
const startApp = () => {
  domBuilder();
  logoutButton();
  navBar();
};

export default startApp;
