import React from 'react';
import axios from 'axios';

function MyPost(exe) {
  // Cria os dados para serem enviados
  // const obj = {
  //   name: 'Sexta-Feira'
  // };

  axios.post('http://localhost:5000/training/', exe)
    .then(res => console.log(res.data));
  return (
    <p>Teste de POST com API Axios</p>
  );
}
export default MyPost;
