import React from "react";
export default function Citacoes(props) {
  return (
    <div>
      <h3>Citação: {props.citacao}</h3>
      <p>Autor: {props.autor}</p>
      <hr />
    </div>
  );
}
