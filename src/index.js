import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/toastStyle.scss';
// import { StrictMode } from 'react';

const basename = process.env.REACT_APP_BASENAME || '/';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter basename={basename}>        
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {/* <StrictMode> */}
          <App />
        {/* </StrictMode> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
    </>
);