import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import  EditUserForm from './forms/EditUserForm'


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  max-width: 88rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`
const H1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: .25rem;
  line-height: 1.17;
  text-transform: uppercase;
`

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 1.33;
  margin-top: 0;
`

const App = () => {
  const usersData = [
    // { id: 1, name: 'Tania', username: 'floppydiskette' },
    // { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  const [users, setUsers] = useState(usersData)
  // флаг editing - изначально false, функция установки флага
  const [editing, setEditing] = useState(false)
  // начальное значение для формы редактирования
  // так как мы не знаем, кто редактируется - пустые поля
  const initialFormState = { id: null, name: '', username: '' }
  // значение "текущий пользователь на редактировании" + функция установки этого значения
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  // обновление пользователя
  const updateUser = (id, updatedUser) => {
    // когда мы готовы обновить пользователя, ставим флажок editing в false
    setEditing(false)
    // и обновляем пользователя, если нашли его по id
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // редактирование пользователя
  const editRow = user => {
    // готовы редактировать - флажок в true
    setEditing(true)
    // устанавливаем значения полей для формы редактирования
    // на основании выбранного "юзера"
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <div>
      <H1>CRUD Users</H1>
      <GridContainer>
        <div>
          {/* редактируем ? рисуй форму редактирования, иначе - форму добавления */}
          {editing ? (
            <div>
              <H2>Edit user</H2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <H2>Add user</H2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div>
          <H2>View users</H2>
          {/* передаем editRow */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </GridContainer>
    </div>
  )
}

export default  App 