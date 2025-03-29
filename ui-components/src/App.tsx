import { Logger } from '@ag-common/core-utils';
import { useCallback } from 'react';
import './App.css';
import { OnClickCallbackArg } from './components/base/BaseProps';
import { Button } from './components/button/Button';
import { Demo } from './components/demo/Demo';
import { Theme } from './utils/theme/Theme';

const logger = Logger.getLogger('App');

function App() {
  window.addEventListener('load', () => {});

  const onButtonClick = useCallback((evtOpts: OnClickCallbackArg) => {
    logger.log('onButtonClick: ', evtOpts);
  }, []);

  return (
    <div data-theme={Theme.getDefault()} className="App relative">
      <div className="top-10">
        this div is having top 10 wiht respect to app div
      </div>
      <Button
        id="btn1"
        text="Kya Bhai"
        // color={Color.PRIMARY}
        // styleTo={StyleTo.OUTLINE}
        // behavior={Behavior.ACTIVE}
        // size={Size.LG}
        // modifier={Modifier.WIDE}
        onClick={onButtonClick}
      />
      <Demo />
    </div>
  );
}

export default App;
