import './App.css';
import { Demo } from './components/demo/Demo';

function App() {
  return (
    <div className="App relative">
      <div className="top-10">
        this div is having top 10 wiht respect to app div
      </div>
      <Demo />
    </div>
  );
}

export default App;
