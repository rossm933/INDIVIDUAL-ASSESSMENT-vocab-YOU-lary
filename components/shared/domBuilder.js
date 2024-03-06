import renderToDOM from '../../utils/renderToDom';

// Different containers for app
const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-container"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="vocab-cards"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
