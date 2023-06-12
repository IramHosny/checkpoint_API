import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserList() {
    const [users, setusers] = useState([]);
    useEffect(() => {
      try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {setusers(res.data)});
      } catch (error) {
        console.log(error);
      }
    }, [])
    
  return (
    <div>
       {users ? users.map((el)=>(<div>
        <Card className='carte' style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          <h3>{el.username}</h3>
          <h3>{el.email}</h3>
        </Card.Text>
        <Button variant="primary"> know more about {el.name}</Button>
      </Card.Body>
    </Card>
         </div>)):<img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/> } 
    </div>
  )
}

export default UserList