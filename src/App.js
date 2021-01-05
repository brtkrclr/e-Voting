import './App.css';
import HomeU from './HomeU';
import Navbar from "./Navbar";
import NavbarU from './NavbarU';
import Home from './Home';
import SignIn from './SignIn';
import CreateVotingForm from './CreateVotingForm';
import EditVoting from './EditVoting';
import PasswordChangedForm from './PasswordChangedForm';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import AdminVotePanel from './AdminVotePanel';
import UserProfile from './UserProfile';
import OrganizerProfile from './OrganizerProfile';
import { Route, Router } from 'react-router-dom';

function App() {
  return (

    <div className="App">
    <HomeU/>
    </div>

  );
}

export default App;
