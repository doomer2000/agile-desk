import { handleClick, handleSubmit, handleMouseDown } from './scripts/eventHandlers.js';
// import { loadColumns } from './scripts/storage.js';

import './styles/index.css';

const app = document.querySelector('.app');

app.addEventListener('click', handleClick);
app.addEventListener('submit', handleSubmit);
app.addEventListener('mousedown', handleMouseDown);
app.addEventListener('dragstart', () => false);
