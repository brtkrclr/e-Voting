import './App.css';
import SignUp from "./auth/SignUp"
import SignIn from "./auth/SignIn"
import ForgotPasswordForm from "./auth/ForgotPasswordForm"
import Home from "./home/Home"
import OrganizerProfile from "./organizer/OrganizerProfile"
import CreateVotingForm from "./voting/CreateVotingForm"
import EditVoting from "./voting/EditVoting"

import { BrowserRouter as Router, Route} from 'react-router-dom';

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
