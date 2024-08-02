import './style.css';
import { renderToDom } from './utils/renderToDom';
import { clearDom } from './utils/clearDom';
import { domBuilder } from './components/shared/domBuilder';
import { basicForm } from './components/forms/basicForm';

const homepage = () => {
  const domString = `
    <div">
      <h1 class="my-4">Welcome</h1>
      <p>Click the button to fill out a form!</p>
      <button class="btn btn-primary" id="click-me-btn">Click me</button>
    </div>`;
  renderToDom('#view', domString);
}

const events = () => {
  // Target elements
  const clickMeBtn = document.querySelector('#click-me-btn')

  // Event Listeners
  clickMeBtn?.addEventListener('click', () => {
    clearDom();
    basicForm();
  });
};

const startApp = () => {
  domBuilder();
  homepage();
  events(); // Most go last.
};

startApp();
