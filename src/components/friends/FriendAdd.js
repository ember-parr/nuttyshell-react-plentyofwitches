import React, { useContext, useState, useEffect } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { FriendCard } from "./FriendCard";

export const FriendAdd = () => {
  const { friends, getFriends, addFriend } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredUsers, setUsers] = useState([]);

  const addFriendship = (id) => {
    const currentUser = parseInt(localStorage.user);
    addFriend({ userId: id, followingId: currentUser });
    addFriend({ userId: currentUser, followingId: id });
  };

  useEffect(() => {
    getFriends().then(getUsers);
  }, []);

  useEffect(() => {
    const friendsOfUser = friends.filter(
      (friend) => friend.userId === parseInt(localStorage.user)
    );

    const followingId = friendsOfUser.map((friend) => {
      return friend.followingId;
    });

    const nonFriendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) === false &&
        user.id !== parseInt(localStorage.user)
    );
    setUsers(nonFriendInformation);
  }, [friends, users]);

  return (
    <>
      <h2>Add Friends</h2>
      <div className="friends">
        {filteredUsers.map((user) => (
          <>
            <FriendCard
              key={user.id}
              friend={user}
              isFriend={
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    addFriendship(user.id);
                  }}
                >
                  {" "}
                  Add{" "}
                </button>
              }
            />
          </>
        ))}
      </div>
    </>
  );
};
