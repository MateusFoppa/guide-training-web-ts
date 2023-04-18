import React from 'react';
import axios from 'axios';

function MyPatch(exe) {
  // Cria os dados para serem enviados
  // const user = {
  //   name: "morpheus"

  // };
  axios.put('http://localhost:5000/training/643875e3dca32839a847efa7', exe)
    .then(res => console.log(res));
  return (
    <p>Teste de PATCH com API Axios</p>
  );
}
export default MyPatch;
