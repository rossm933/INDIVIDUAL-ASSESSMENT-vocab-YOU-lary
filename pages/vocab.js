import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getLanguage } from '../api/languageData';

// Bootstrap for vocab card
const emptyVocab = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#vocab-cards', domString);
};
const showVocab = async (array, uid) => {
  clearDom();

  if (array.length === 0) {
    emptyVocab();
  } else {
    let domString = '';
    const languages = await getLanguage(uid);
    array.forEach((item) => {
      const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
      domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${singleLang.language_name}</h6>
      <p class="card-text">${item.definition}</p>
      <p class="card-text">${item.timeSubmitted}</p>
      <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info"><span id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
      <i id="delete-word--${item.firebaseKey}" class="btn btn-danger"><span id="delete-word-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;
    });
    renderToDOM('#vocab-cards', domString);
  }
};

export { showVocab, emptyVocab };
