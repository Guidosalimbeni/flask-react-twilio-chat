import React from 'react';
import { ChatContext } from './App.js';


function LoginForm() {
  const chatData  = React.useContext(ChatContext);
  const userInput = React.useRef();
  const [error, setError] = React.useState(false);
  const login = (ev) => {
    if (ev.type === 'keyup' && ev.key !== 'Enter') {
      return;
    }
    setError(false);
    chatData.login(userInput.current.value).catch(() => setError(true));
  }
  const logout = () => chatData.logout();

  if (chatData.user.username === null) {
    return (
      <div className = "mb-3" id="login">
        <div>
          
          <label for="exampleFormControlInput1" class="form-label">Username</label>
          <input className="form-control" type="text" ref={userInput} onKeyUp={login} autoFocus />
          &nbsp;
          <div class="col-auto">
          <button   type="submit" class="btn btn-primary mb-3"onClick={login}>Login</button>
          {error && <>&nbsp;Login error, please try again.</>}
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div id="login">
        <div>
          Username: <b>{ chatData.user.username }</b>&nbsp;
        </div>
        <div>
        <button  type="submit" class="btn btn-primary mb-3" onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;