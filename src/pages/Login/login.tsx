import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import { SetStateAction, useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Validar los datos antes de enviar la solicitud
    if (!email || !password) {
      console.error('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      console.log('Server response:', response.data);
      // Realizar acciones adicionales después de iniciar sesión, como redireccionar a una página de inicio
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Head title='Login' />
      <TopBar></TopBar>
      <TrainingTitle>Login</TrainingTitle>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type='submit'>Iniciar</button>
        </form>
      </div>
    </Container>
  )
}