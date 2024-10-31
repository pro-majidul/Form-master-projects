
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import Reuseable from './Components/Reuseable/Reuseable'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import HooksForm from './Components/useInputState/HooksForm'  
// import SimpleForm from './Components/SimpleForm/SimpleForm'


function App() {
  // const handelSignup = e => {
  //   console.log(e);
  // }
  // const handelUpdate = e => {
  //   console.log(e);

  // }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HooksForm></HooksForm> */}
      {/* <Reuseable
       formTitle='Sign up'
        handelSubmit={handelSignup}>
          <h3>Sign Up</h3>
          <p>Please Sign up the form </p>
        </Reuseable>
      <Reuseable
       formTitle='Update Profile'
        handelSubmit={handelUpdate}>
          <h3>Update Profile</h3>
          <p>Update your Profile here</p>
        </Reuseable> */}
        <Grandpa></Grandpa>
    </>
  )
}

export default App
