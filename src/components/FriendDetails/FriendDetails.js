import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>Details About: {friend.name}</h2>
      <p>Call him/her: {friend.phone}</p>

    </div>
  );
};

export default FriendDetails;
