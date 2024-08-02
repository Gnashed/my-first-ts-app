// import './style.css';
import { renderToDom } from '../../utils/renderToDom';

export const basicForm = () => {
  const domString = `
    <div">
      <h1 class="my-5">Fill out the form</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>`;

  renderToDom('#view', domString);
};
