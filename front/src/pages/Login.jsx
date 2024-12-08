import { useState } from "react";

import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="bg-red-200 container">
        <div className="flex justify-center">
          <h4>Login</h4>
        </div>
      </div>
    </>
  );
}

export default Login;
