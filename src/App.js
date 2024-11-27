
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import ViewEnquiry from './EnquiryDetails/ViewEnquiry';
import AddEnquiry from './EnquiryDetails/AddEnquiry';

function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Header/>

    
    <div className='background'>
      <Routes>
        <Route path='/' element={<ViewEnquiry></ViewEnquiry>}></Route>
        <Route path='add' element={<AddEnquiry></AddEnquiry>}></Route>
        <Route path='view' element={<ViewEnquiry></ViewEnquiry>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
