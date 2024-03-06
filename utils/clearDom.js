const clearDom = () => {
  document.querySelector('#vocab-cards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
