import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([]);

  // const updater = async () => {
  //   const res = await axios.get('https://randomuser.me/api?results=25');
  //   const { data } = res;
  //   setUsers(data.results)
  // }

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://randomuser.me/api?results=25');
      const { data } = res;
      setUsers(data.results);
    })();
  }, []);

  return (
    <div className='App'>
      {console.log(users)}
      <Container fluid>
        <Row xs={1} md={2} lg={3} className='g-4'>
            {users.map((user, index) => (
              <UserCard user={{ ...user }} key={index} />
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
