import React, { useState } from 'react';
import {useForm} from './useForm'

const App = () => {
  const [values, handleChange] = useForm({email: "", password: ""});
  // const [values2, handleChange2] = useForm({firstName: "", lastName: ""});


  return (
    <div >
      {/* <button
        onClick={() => { 
          setCount(c => c + 1);
          setCount2(c => c + 1);         
          }}
      >+
          </button> */}
      <input name="email" value={values.email} onChange={handleChange} />
      <input 
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
