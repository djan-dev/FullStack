/* import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact 
        img="/images/felix.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="/images/fluffykins.png"
        name="Mr. Tavares"
        phone="(055) 777-432"
        email="dgt1000@gmail.com"
      />
      <Contact 
        img="/images/mr-whiskerson.png"
        name="Mrs. Gleicilene"
        phone="(119) 333-2356"
        email="djan.tavares@go.senac.br"
      />
      <Contact 
        img="/images/pumpkin.png"
        name="Mr. Gomes"
        phone="(879) 111-9823"
        email="liliamedavi2015@gmail.com"
      />
    </div>
  );
}

export default App;
 */

import React from "react";
import Citacoes from "./components/Citacoes";
import citacoesData from "./citacoesData";

export default function App() {
  const elementData = citacoesData.map(e => {
    return <Citacoes citacao={e.citacao} autor={e.autor}/>
  });

  return (
    <div>
      {elementData}
    </div>
  );
}
