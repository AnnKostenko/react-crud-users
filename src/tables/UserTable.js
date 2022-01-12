import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #4bd572;
  color: #4bd572;
  border-radius: 1rem;
  margin: 0.5em 1em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: .3s;
  :hover{
    background: transparent;
    transition: .3s;
    color: #4bd572;
  }
  ${props => props.primary && css`
    background: #4bd572;
    color: white;
  `}
`
const Table = styled.table`
  border: 1px solid #4bd572;
  padding: 1.5rem 2rem;
  border-radius: .5rem;
  border-collapse: collapse;
  overflow: hidden;
  `

const Tr = styled.tr``

const Td = styled.td`
  font-weight: 400;
  font-size: .75rem;
  line-height: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  border: 1px solid #13672a;`
const Th = styled.th`
  font-weight: 400;
  font-size: .75rem;
  line-height: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  border: 1px solid #13672a;`

const UserTable = props => {
    const handleDeleteUser = id => {
      // не забываем спросить пользователя,
      // действительно ли он хочет удалить запись
      let answer = window.confirm('Вы действительно хотите удалить пользователя?')
  
      if (answer) {
        props.deleteUser(id)
      }
    }
    return (
      <Table>
        <thead>
          <Tr>
            <Th>Имя</Th>
            <Th>Имя пользователя</Th>
            <Th>Опции</Th>
          </Tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>
                <Button primary
                  onClick={() => {
                    props.editRow(user)
                  }}
                >
                  Редактировать
                </Button>
                  <Button primary
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Удалить
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <td className="text">Пока нет пользователей</td>
            </Tr>
          )}
        </tbody>
      </Table>
    )
  }

export default UserTable 