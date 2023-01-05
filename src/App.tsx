import Home from './pages/Home/Home';

import SignUp from './pages/SignUp/SignUp';
import './App.scss';

function App() {
  return (
    <div className="page-container">
      {/* check authentification and shop page based on that */}
      <Home />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
