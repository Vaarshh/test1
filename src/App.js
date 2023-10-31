import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} 
                    from 'react-router-dom';


import EditList from './components/newshop.component';
import AddTodo from './components/addtodo.component';
import TodoLists from './components/newproduct.component';
import Navigation from './components/navigation.component';
import NewShop from './components/newshop.component';

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
      <Route path='/' Component={TodoLists}/>
      <Route path='/edit/:id' Component={EditList}/>
    </Routes>


    </Router>
  );
}

export default App;
