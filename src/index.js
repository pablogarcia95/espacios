import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebase-config';

import {
    FirebaseAppProvider 

} from 'reactfire';

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
<App />
</FirebaseAppProvider>
 ) , document.querySelector('#root'));
serviceWorker.unregister();