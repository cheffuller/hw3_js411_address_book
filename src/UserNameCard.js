import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function UserNameCard({ user , revealClick }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={user.picture.large} />
      <Card.Body>
        <Card.Title>
          {user.name.title} {user.name.first} {user.name.last}
        </Card.Title>
        <Button onClick={revealClick} variant='primary'>Show Details</Button>
      </Card.Body>
    </Card>
  );
}

export default UserNameCard;