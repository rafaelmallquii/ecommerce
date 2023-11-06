import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-red-600">
        <h4 className="text-white">Categoria</h4>
        <h1>Explore nuestra gama de productos</h1>
        <div className="grid grid-cols-4 gap-2 bg-red-500">
          <div >
            <img
              src="https://mipclista.com/img/cms/a1-1-600x400.png"
              alt="logo"
            />
          </div>
          <div >
            <img
              src="https://mipclista.com/img/cms/a1-1-600x400.png"
              alt="logo"
            />
          </div>
          <div >
            <img
              src="https://mipclista.com/img/cms/a1-1-600x400.png"
              alt="logo"
            />
          </div>
          <div >
            <img
              src="https://mipclista.com/img/cms/a1-1-600x400.png"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className=""><p>hola</p></div>
        <div className=""><p>hola</p></div>
        <div className=""><p>hola</p></div>
        <div className=""><p>hola</p></div>
      </div>
    </div>
  );
}
