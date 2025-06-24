import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// REMOVIDO: O import do CSS global.
// Com o Tailwind CSS v4 e o @tailwindcss/cli, o CSS compilado (output.css)
// é linkado diretamente no index.html. Portanto, não é necessário (e seria redundante/incorreto)
// importá-lo via JavaScript/TypeScript aqui para os estilos do Tailwind.
// Se você tivesse outros estilos CSS globais *não relacionados ao Tailwind*
// que precisassem ser processados pelo Vite, você os importaria aqui.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);