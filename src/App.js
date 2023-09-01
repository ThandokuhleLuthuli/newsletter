import './App.scss';
import './components/button/button';
import Success from './components/success/success';
import Form from './components/form/form';
import { NewsletterContext } from './context/context';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';


function App() {

  const [email,setEmail] = useState("");

  return (
    <div className="App">
     <NewsletterContext.Provider value={{email,setEmail}}>
     <Routes>
        <Route path='/' element={<Form/>}exact/>
        <Route path='/success' element={<Success/>}exact/>
     </Routes>
     </NewsletterContext.Provider>
    </div>
  );
}

export default App;
