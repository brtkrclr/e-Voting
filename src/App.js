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
import UserProfile from './UserProfile';
import OrganizerProfile from './OrganizerProfile';
import SignUp from "./SignUp";
import FilterSearches from "./FilterSearches";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ForgotPasswordForm from "./ForgotPasswordForm";

function App() {
  return (
<Router>
  <div className="App">
  <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/signin" component={SignIn}/>
  <Route exact path="/home" component={Home}/>
    <Route exact path="/forgotpasswordform" component={ForgotPasswordForm}/>
  <Route path="/organizerprofile" component={OrganizerProfile}/>
  <Route path="/createvote" component={CreateVotingForm}/>
    <Route path="/editvoting" component={EditVoting}/>
  </div>
</Router>
  );
}

export default App;
