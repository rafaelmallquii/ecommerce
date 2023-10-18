"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
function NavBar() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <nav>
      <div className="flex  justify-around ">
        <section className="flex gap-2">
          <img src="#" alt="logo1" />
          <p>
            Lunes a Sábado 9am a 6pm - Domingo 10am a 3pm | Pasaje, Acisclo
            Villarán 331 Sótano 1
          </p>
        </section>
        <section className="flex gap-2">
          <img src="#" alt="logo2" />
          <p>983 558 113</p>
        </section>
      </div>
      <div className="flex justify-around p-4">
        <div className="flex">
          <a href="#">
            <img
              src="https://mipclista.com/img/logo.png"
              loading="lazy"
              alt=""
              width="251"
              height="88"
            />
          </a>
        </div>
        <form className="flex justify-center m-6 ">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Todos"
            className="w-40 border-2 border-black md:w-14rem rounded-none"
          />
          <div className=" flex border-2 border-black flex-column align-items-center">
            {/* <InputText type="text" placeholder="Normal" /> */}
            <InputText
              type="text"
              className="p-inputtext-lg w-[600px] focus:ring-0"
              placeholder="Busca en nuestro catálogo"
            />
            {/* <InputText type="text" className="p-inputtext-sm" placeholder="Small" /> */}
          </div>
          <button className="bg-[#F51300] hover:bg-black text-white font-bold py-2 px-4 rounded">
            <span>BUSCAR</span>
          </button>
        </form>
        <div className="grid items-center">
          <div className="flex gap-4">
            <div className="border-2 border-[#F51300] ">
              <a href="#">
                <i className="">
                  <img src="#" alt="logo3" />
                </i>
              </a>
            </div>
            <div className="border-2 border-[#F51300]">
              <a href="#">
                <i>
                  <img src="#" alt="logo3" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
