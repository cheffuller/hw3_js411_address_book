import { useState } from 'react';
import UserNameCard from './UserNameCard';
import UserDetailsCard from './UserDetailsCard';

function UserCard({user}, index) {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(isHidden == true ? false : true);
  };

  function User() {
    if (isHidden) {
      return (
        <div>
          <UserNameCard revealClick={handleClick} user={{ ...user }} />
        </div>
      );
    }
    return (
      <div>
        <UserNameCard  user={{ ...user}} />
        <UserDetailsCard hideClick={handleClick} user={{ ...user }} />
      </div>
    );
  }

  return <User user={{ ...user }}></User>;
}

export default UserCard;
