import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div className="App">
      <h1>Formulário</h1>
      <form>
        <label htmlFor="nome">Nome
        <input 
          type="text" 
          id="nome" 
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        </label>
        <label htmlFor="age">Idade
        <input 
          type="number" 
          id="age" 
          value={age} 
          onChange={({ target }) => setAge(target.value)}
        />
        </label>
        <label htmlFor="city">Cidade
        <input 
          type="test" 
          id="city" 
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        </label>
        <hr></hr>
        <input 
          type="radio" 
          id="fundamentals" 
          name="module" 
          value="Fundamentos"
          checked={module === 'Fundamentos'} 
          onChange={({ target }) => setModule(target.value)}
        />
        <label for="fundamentals">Fundamentos</label><br></br>
        <input 
          type="radio" 
          id="front-end" 
          name="module" 
          value="Front-End" 
          checked={module === 'Front-End'}
          onChange={({ target }) => setModule(target.value)}
        />
        <label for="front-end">Front-end</label><br></br>
        <input 
          type="radio" 
          id="back-end" 
          name="module" 
          value='Back-End'
          checked={module === 'Back-End'}
          onChange={({ target }) => setModule(target.value)}
        />
        <label for="back-end">Back-end</label><br></br>
        <input 
          type="radio" 
          id="ciencias" 
          name="module" 
          value='Ciências da Computação'
          checked={module === 'Ciências da Computação'}
          onChange={({ target }) => setModule(target.value)} 
        />
        <label for="ciencias">Ciências da Computação</label><br></br>
      </form>
      <button>Enviar</button>
    </div>
  );
}

export default App;
