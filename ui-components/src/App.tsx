import './App.css';
import { Demo } from './components/demo/Demo';
import { Theme } from './utils/theme/Theme';

function App() {
  window.addEventListener('load', () => {});

  return (
    <div data-theme={Theme.getDefault()} className="App relative">
      <div className="top-10">
        this div is having top 10 wiht respect to app div
      </div>
      <Demo />
    </div>
  );
}

export default App;
