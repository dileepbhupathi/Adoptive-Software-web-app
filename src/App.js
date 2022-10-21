import './App.css';
import { AdoptBody } from './components/AdoptBody/AdoptBody';
import { AdoptFooter } from './components/AdoptFooter/AdoptFooter';
import { AdoptNavbar } from './components/AdoptNavbar/AdoptNavbar';

function App() {
  return (
    <div class='app'>
      <AdoptNavbar/>
      <AdoptBody/>
      <AdoptFooter/>
    </div>
  );
}

export default App;
