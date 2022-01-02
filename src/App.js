import React, { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm';

function App() {
  const [usuarios, setUsuarios] = useState([])
  
  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }
  return (
    <Container>
      <div style={{ marginTop: '150px' }}>
        <Card>
          <UserForm submit={submit}/>
        </Card>
      </div>
      <Card>
        <ul>
          {
            usuarios.map(usuario => {
              return <li key={usuario.email}>{`${usuario.nombre} ${usuario.apellido} ${usuario.email}`}</li>
            })
          }
        </ul>
      </Card>
    </Container>
  );
}

export default App;
