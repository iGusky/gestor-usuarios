import React, { useState } from 'react'

export const useFormulario = (initialState) => {
  const [formulario, setFormulario] = useState(initialState);
  const reset = () => {
    setFormulario(initialState)
  }
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
  return [formulario, handleChange, reset]
}