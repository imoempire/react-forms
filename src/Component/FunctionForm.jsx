import React from 'react';
import { useState } from 'react';

const FunctionForm = () => {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  // const etName=(e) => { e.target.value}
  // const metEmail=(e) => { e.target.value}
  // const netPassword=(e) => { e.target.value}
  return (
    <>
       <form className="new-form" >
        <div className="mb-3">
          <h1>FUNCTION FORM</h1>
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" value={name}  onChange={(e) =>setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" value={email}onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" for="exampleInputPassword">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </>
  );
}

export default FunctionForm;
