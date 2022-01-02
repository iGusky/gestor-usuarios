import React from 'react'
import Input from './components/Input';
import Button from './components/Button';
import { useFormulario } from './hooks/useFormulario';
const UserForm = ({submit}) => {
  const [formulario, handleChange, reset] = useFormulario({
    nombre: '',
    apellido: '',
    email: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={handleChange}
        label="Nombre"
      />
      <Input
        name="apellido"
        placeholder="Apellido"
        value={formulario.apellido}
        onChange={handleChange}
        label="Apellido"
      />
      <Input
        name="email"
        placeholder="Email"
        value={formulario.email}
        onChange={handleChange}
        label="Email"
      />

      <Button>
        Enviar
      </Button>
    </form>
  )
}

export default UserForm
