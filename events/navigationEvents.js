import { signOut } from '../utils/auth';
// Navigation events
const navigationEvents = () => {
// logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // filter buttons
  // All cards
};

export default navigationEvents;
