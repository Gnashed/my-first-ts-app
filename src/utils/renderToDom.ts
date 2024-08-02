export const renderToDom = (divId: string, contentToRender: string) => {
  const selectDiv = document.querySelector(divId);
  selectDiv!.innerHTML = contentToRender;
};
