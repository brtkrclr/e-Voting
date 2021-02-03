import "./App.css";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ForgotPasswordForm from "./auth/ForgotPasswordForm";
import Home from "./home/Home";
import HomeU from "./home/HomeU";
import OrganizerProfile from "./organizer/OrganizerProfile";
import UserHome from "./auth/BoardUser";
import GiveVote from "./user/GiveVote";
import AdminHome from "./auth/BoardAdmin";
import CreateVotingForm from "./voting/CreateVotingForm";
import EditVoting from "./voting/EditVoting";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavbarU from "./navbar/NavbarU";
import AuthService from "./services/auth.services";
import BoardAdmin from "./auth/BoardAdmin";
import BoardUser from "./auth/BoardUser";
import BoardOrganizer from "./auth/BoardOrganizer";
import Profile from "./Profile";
import VoteResult from "./user/VoteResult";
import UserProfile from "./user/UserProfile";
import FilterSearches from "./filtersearch/FilterSearches";
import Navbar from "./navbar/Navbar";
import ResetPasswordForm from "./auth/ResetPasswordForm";
import ChangePasswordForm from "./auth/ChangePasswordForm";
import AllVotings from "./user/AllVotings";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path={["/", "/homeU"]} component={HomeU} />
            <Route
              exact
              path="/forgotpasswordform"
              component={ForgotPasswordForm}
            />
            <Route path="/profile" component={Profile} />
            <Route exact path={"/home"} component={Home}/>
            <Route path="/organizerprofile" component={OrganizerProfile} />
            <Route path="/organizer" component={BoardOrganizer} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/createvote" component={CreateVotingForm} />
            <Route path="/editvoting/:id" component={EditVoting} />
            <Route path="/filtersearch" component={FilterSearches}/>
            <Route path="/givevote" component={GiveVote}/>
            <Route path="/voteresult" component={VoteResult}/>
            <Route path="/userprofile" component={UserProfile}/>
            <Route path="/resetpasswordform" component={ResetPasswordForm}/>          
            <Route exact path="/changepasswordform" component={ChangePasswordForm}/>
            <Route path="/allvotings" component={AllVotings}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
