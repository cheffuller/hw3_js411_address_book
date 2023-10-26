import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserDetailsCard({ user, hideClick }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        Age: {user.dob.age}<br />
        Cell: {user.cell}<br />
        {user.email}<br />
        Nationality: {user.nat}<br /><br />
        <Button onClick={hideClick} variant='primary'>
          Hide Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserDetailsCard;
