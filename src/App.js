import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import Form from './components/Form';

function App() {
  return (
    <div className='w-[50%] m-auto my-5' >
      <h1 className='font-bold text-4xl'>My Todo List</h1>
      <Form/>
      <Todolist/>
    </div>
  );
}

export default App;
