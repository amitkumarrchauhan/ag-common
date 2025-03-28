import { Logger } from '@ag-common/core-utils';
import { AgDemo } from '@ag-common/ui-components';
import './App.css';

const logger = Logger.getLogger('CORE-UI.App');

function App() {
  // const x = '2';
  logger.log('Core App rendered');

  return (
    <div className="App">
      <AgDemo />
      <span>UI-CORE APP</span>
    </div>
  );
}

export default App;
