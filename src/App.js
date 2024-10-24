
import './App.css';
import Navbar from './Component/Navbar.js';
import TextForm from './Component/TextForm.js';
import About from './Component/About.js';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us"/>
      <div className='container my-3'>
        {/* <TextForm heading="Enter Your Text to Analysis Below"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
