import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
