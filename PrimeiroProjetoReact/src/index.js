import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* const navbar = (
  <nav>
    <h1>Bistro 3way</h1>
      <ul>
        <li>Preço</li>
        <li>Quem Somos</li>
        <li>Contato</li>
      </ul>
  </nav>
) */

//Componente é escrito em PascalCase
//Componente é colocado em colchete angulares com uma barra
//depois do nome < NomeComponentePascalCase />
//dentro do return eu preciso que esteja dentro de um container
//    exemplo: <div></div> ou <section></section>
// Caso não queira usar, tem a opção de usar a fragmentação
//    exemplo: <></>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<App />}
  </React.StrictMode>
  );
