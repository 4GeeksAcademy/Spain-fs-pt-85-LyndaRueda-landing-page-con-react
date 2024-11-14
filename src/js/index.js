import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el contenedor 'root' en el DOM.");
}

