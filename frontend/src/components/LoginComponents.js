import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div>
      <input placeholder="email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="password" type="password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;