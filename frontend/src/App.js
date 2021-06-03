import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Container>
          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route exact path='/companies'>
              <CompanyList />
            </Route>
            <Route path='/companies/:handle'>
              <CompanyDetail />
            </Route>
            <Route exact path='/jobs'>
              <JobsList />
            </Route>
            <Route exact path='/profile'>
              <div>Profile</div>
            </Route>
            <Route path='/login'>
              <div>Login Form</div>
            </Route>
            <Route path='/signup'>
              <div>Sign Up Form</div>
            </Route>
            <Route>
              <div>Not Found Component</div>
            </Route>
          </Switch>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
