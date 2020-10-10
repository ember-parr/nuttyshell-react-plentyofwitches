import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { FriendCard } from "./FriendCard";
import "./Friend.css";

export const FriendList = () => {
  const {
    friends,
    getFriends,
    deleteFriend,
    addFriend,
    searchTerms,
  } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredUsers, setUsers] = useState([]);
  const [filteredNotFriendUsers, setNotFriendUsers] = useState([]);

  //delete friend
  const removeFriendship = (id) => {
    friends.map((friend) => {
      if (friend.userId === id) {
        deleteFriend(friend.id);
      }
      if (friend.followingId === id) {
        deleteFriend(friend.id);
      }
    });
  };

  //add friends
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
    const followingId = friendsOfUser.map((friend) => friend.followingId);

    const friendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) && user.id !== parseInt(localStorage.user)
    );

    const nonFriendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) === false &&
        user.id !== parseInt(localStorage.user)
    );

    if (searchTerms !== "") {
      const subset = friendInformation.filter(
        (friend) =>
          friend.username
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim()) ||
          friend.firstName
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim()) ||
          friend.lastName
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim())
      );
      const nonFriendSubset = nonFriendInformation.filter(
        (friend) =>
          friend.username
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim()) ||
          friend.firstName
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim()) ||
          friend.lastName
            .toLowerCase()
            .includes(searchTerms.toLowerCase().trim())
      );
      setUsers(subset);
      setNotFriendUsers(nonFriendSubset);
    } else {
      setUsers(friendInformation);
      setNotFriendUsers(nonFriendInformation);
    }
  }, [friends, users, searchTerms]);

  return (
    <>
      <div className="friends">
        {filteredUsers.map((user) => (
          <FriendCard
            key={user.id}
            friend={user}
            isFriend={
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  removeFriendship(user.id);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            }
          />
        ))}
      </div>
      <h2>Add Friends</h2>
      <div className="friends">
        {filteredNotFriendUsers.map((user) => (
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
