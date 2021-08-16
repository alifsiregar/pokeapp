import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles';
import { routes } from './routes';
import Navbar from './components/Navbar';

function App() : JSX.Element {
  return (
    <>
      <Global
        styles={GlobalStyles}
      />
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
