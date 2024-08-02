import { renderToDom } from "../../utils/renderToDom";

export const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};
