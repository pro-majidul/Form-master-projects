
import './App.css'
import Reuseable from './Components/Reuseable/Reuseable'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import HooksForm from './Components/useInputState/HooksForm'  
// import SimpleForm from './Components/SimpleForm/SimpleForm'


function App() {
  const handelSignup = e => {
    console.log(e);
  }
  const handelUpdate = e => {
    console.log(e);

  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HooksForm></HooksForm> */}
      <Reuseable formTitle='Sign up' handelSubmit={handelSignup}></Reuseable>
      <Reuseable formTitle='Update Profile' handelSubmit={handelUpdate}></Reuseable>
    </>
  )
}

export default App
