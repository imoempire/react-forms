import './App.css';
import ClassForm from './Component/ClassForm';
import FunctionForm from './Component/FunctionForm';

function App() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Complete the Form Provided Below</h1>
   <div className="forms">
   < ClassForm />
   <FunctionForm />
   </div>
   </>
  );
}

export default App;
