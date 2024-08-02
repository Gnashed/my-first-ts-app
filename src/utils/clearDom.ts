export const clearDom = () => {
  const selectFormContainer = document.querySelector('#form-container');
  const selectView = document.querySelector('#view');

  if (selectFormContainer !== null) {
    selectFormContainer.innerHTML = '';
  }
  if (selectView !== null) {
    selectView.innerHTML = '';
  }
};
