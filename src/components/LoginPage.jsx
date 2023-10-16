import React from "react";
import Fundo from '../assets/Underground-car-parking-garage2.png'
import logo from '../assets/logo.png'
import InputComponent from "./InputComponent";
import { IoKeyOutline,IoPersonOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-fixed" style={{backgroundImage:`url(${Fundo})`}}>
     
      <div className="main flex flex-col items-center w-[90vw] h-[80%] p-8 bg-white bg-opacity-60 rounded-3xl sm:w-[50%]">
       
        <div className="header flex items-center ml-[-30px]">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <div className="text text-textColor flex flex-col justify-center">
            <h2 className="text-[1.6rem]  font-bold">ParkSmart</h2>
            <h3 className=" text-lg font-medium">Maxaquene</h3>
          </div>
        </div>

        <h1 className="text-[2rem] text-textColor font-extralight ">Login</h1>
        
        {/* FORMULÁRIO */}
        <form className="flex flex-col p-4 gap-5 text-[#1d2c2c] md:w-[65%] ">
          <div className="flex flex-col ">
            <label htmlFor="nome" className=" font-normal mb-1 flex items-center "><BiUser className=" text-lg mr-2" />Nome do usuário:</label>
            <InputComponent 
              className=''
              id="nome"
              type="text"
              placeholder="Introduza o seu nome"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="senha" className=" font-normal mb-1 flex items-center "><IoKeyOutline className=" text-lg mr-2"/>Senha:</label>
            <InputComponent 
              id="nome"
              type="password"
              placeholder="Introduza a senha"
            />
          </div>
          <button type="submit" className="submit bg-primaryColor rounded-xl text-white">Sign in</button>
        </form>



      </div>
    </div>
  );
};

export default LoginPage;