import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './components/pages/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import NovoVideo from './components/pages/cadastro/Video';
import NovaCategoria from './components/pages/cadastro/Categoria'


// criar algo diferente para a página de erro
const error404 = () => (<h1>Error 404</h1>)

ReactDOM.render(
  <BrowserRouter>
  <Switch> 
    <Route path="/" component={App} exact />
    <Route path="/cadastro/video" component={NovoVideo} />
    <Route path="/cadastro/categoria" component={NovaCategoria} />
    <Route component={error404} />
  </Switch>
  </BrowserRouter>,
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);