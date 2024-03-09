import renderToDom from '../../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <div id="filter-buttons">
    <button type="button" class="btn btn-filter btn-lg" id="all-vocab">All</button>
    <button type="button" class="btn btn-filter btn-lg" id="html-vocab">HTML</button>
    <button type="button" class="btn btn-filter btn-lg" id="css-vocab">CSS</button>
    <button type="button" class="btn btn-filter btn-lg" id="java-vocab">JavaScript</button>
  </div>
  `;
  renderToDom('#filter-container', domString);
};

export default filterButtons;
