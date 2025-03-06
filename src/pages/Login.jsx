import React, { useState } from "react";
import { signUp, login } from "../auth";
import { useNavigate } from "react-router-dom"; // React Router Hook

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Hook'u istifadə et
  

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (currentState === "Sign Up") {
      const user = await signUp(email, password, name);
      if (user) {
        alert("Qeydiyyat uğurla tamamlandı!");
        // Qeydiyyat tamamlandıqdan sonra login səhifəsinə yönləndirin
        setCurrentState("Login"); // SignUp səhifəsini login ilə dəyişin
        setEmail(""); // E-poçtu təmizləyin
        setPassword(""); // Şifrəni təmizləyin
      } else {
        alert("Qeydiyyat zamanı xəta baş verdi!");
      }
    } else {
      const user = await login(email, password);
      if (user) {
        alert("Giriş uğurlu oldu!");
        // Giriş uğurlu olduqda istifadəçini profil səhifəsinə yönləndirin
        navigate("/"); // Profil səhifəsinə yönləndirir
      } else {
        alert("Giriş zamanı xəta baş verdi!");
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? "" : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
