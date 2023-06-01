import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import { persistor, store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</React.StrictMode>
	</Provider>
	,
	document.getElementById('root')
);
