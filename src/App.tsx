import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Modules/Pages/Welcome';
import Template from './Modules/Template';
import { SignInSignUp } from './Modules/Pages/signinSignup';
import { Paths } from './constants';
import Board from './Modules/Pages/board';
import { Main } from './Modules/Pages/main';
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.home} element={<Template />}>
          <Route index element={<Welcome />} />
          <Route path={Paths.auth} element={<SignInSignUp />} />
          <Route path={Paths.main} element={<Main />} />
          <Route path={Paths.board} element={<Board />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
