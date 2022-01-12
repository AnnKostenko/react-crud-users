import React, { useState, useEffect} from 'react'
import styled, { css } from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #4bd572;
  color: #4bd572;
  border-radius: 1rem;
  margin: 0.5em 1em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: 240ms ease-out;
  max-width: 11rem;
  :hover{
    transform: scale(1.05);
    transition: 240ms ease-out;
  }
`

const Label = styled.label`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin-top: .5rem;
  max-width: 16rem;
  padding: 0.5rem 1rem;
  appearance: none;
  background-color: transparent;
  box-shadow: none;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid #c4c4c4;
  display: block;
  width: 100%;
  opacity: 0.5;
  &::placeholder {
    color: #ffffff;
    font-weight: 400;
  }
  :hover {
    opacity: 1;
  }
  :focus {
    outline: transparent;
    border-color: #4bd572;
    opacity: 1;
  }

`

const EditUserForm = props => {
  // в качестве начального аргумента передаем
  // пользователя, которого собираемся редактировать
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  // используем effect-hook
  useEffect(
    () => {
      // вызывай данную функцию
      setUser(props.currentUser)
    },
    [props] // всегда, если изменились props
  )


  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.username) return

    // вызываем updateUser
    props.updateUser(user.id, user)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      </Label>
      <Label>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      </Label>
      <Button>Update user</Button>
      <Button
        /* обновляем флаг editing, будет представлен в App позже */
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm 