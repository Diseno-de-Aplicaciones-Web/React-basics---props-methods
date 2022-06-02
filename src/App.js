import { useState } from 'react';

import TextoCualquiera from './components/TextoCualquiera';
import PasaPalabro from './components/PasaPalabro';

function App() {

  const [ palabro, setPalabro ] = useState("aceituna")

  return (
    <>
      <PasaPalabro parentSetter={setPalabro}/>
      <p>Palabro: {palabro}</p>
      <TextoCualquiera dynamicString="Lo que sea"/>
      <TextoCualquiera dynamicString="Otra cosa"/>
    </>


  );
}

export default App;
