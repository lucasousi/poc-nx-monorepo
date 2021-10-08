import './app.scss';
import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() =>
  import('@primavera/frontend-b/routes/home-page').then(({ HomePage }) => ({
    default: HomePage,
  }))
);

const App = () => (
  <div className="app container">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home-page" />
          </Route>
          <Route exact path="/home-page" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
