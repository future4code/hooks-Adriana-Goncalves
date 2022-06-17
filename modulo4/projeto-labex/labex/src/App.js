import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Router from './router/Router';
import StyledGlobal from './styledGlobal/StyledGlobal';

function App() {
  return (
    <div >
      <StyledGlobal/>
      <HomePage/>
      <Router/>

    </div>
  );
}

export default App;
