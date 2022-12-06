import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import {Form} from './components/Form'
import './App.css';
import StudentProfile from './components/StudentProfile';
import TestForm from './components/TestForm';

function App() {
  return (
    <div className="App">
      <TestForm/>      
      <Navbar/>
      <Form/>
      <StudentProfile/>
      <Footer/>
    </div>
  );
}

export default App;
