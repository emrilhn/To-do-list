import { useState } from 'react'
import React from 'react'
//import Logo from './assets/0x0.webp'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Title = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 15px;
  font-family: 'Georgia', serif;
`;

const ListItem = styled.li`
  cursor: pointer;
`;


const App = () => {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  //console.log(todos)

  
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
    
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoInput(""); 
  }

  const sil = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  
 
  
   const addTodo = () => {
    if (todoInput.trim() === "") {
      return;
    }

    setTodos([...todos, todoInput]);
    setTodoInput("");
  }
  
  
  

  return (
  
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <Title>HEDEF EKLE</Title>
      <Form onSubmit={handleSubmit} className="w-100 ">
        <Form.Group  controlId="todoForm ">
          <Form.Label className=''></Form.Label>
          <InputGroup className=''>
            <Form.Control className=' rounded-3 text-center mx-1'
              type="text"
              placeholder="Yeni bir hedef girin"
              value={todoInput}
              onChange={handleInputChange}
            />
            <Button onClick={addTodo} className='rounded-3 ' variant="primary" type="button">
              Ekle
            </Button>
          </InputGroup>
          <div className='  text-center me-5 '>
            <ul className='text-center me-4 rounded-3 '>
             {todos.map((todo, index) => {
              return( 
                <ListItem className='my-3 border rounded-3 mx-5 py-2 bg-white' onClick={() => sil(index)} key={index}>
                <span className='mx-3'>{todo}</span>
              </ListItem>
              );
             })}
            </ul>
            </div>
          
        </Form.Group>
      </Form>
    </Container>
    
    
  );
};

export default App;