import React from "react";
import AuthService from "./services/auth.services";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <h3>{currentUser.roles}</h3>
      <ul>{console.log(currentUser.roles)}</ul>
    </div>
  );
};

export default Profile;
