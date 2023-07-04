import './App.css';
import Footer from'./components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';
import { Fragment } from 'react';



function App() {
  return (
    <Fragment >
     
     <h3>Usuarios 2023</h3>
    
      <Header/> 
      <Main/>
      <Footer/>
      
    </Fragment>
  );
}

export default App;
