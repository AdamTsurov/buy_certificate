import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './app/app';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
