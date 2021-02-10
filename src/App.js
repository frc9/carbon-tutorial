import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TLHeader from './components/TLUIShell/TLHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import ThreatsPage from './content/Threats';

class App extends Component {
  render() {
    return (
      <>
        <TLHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/threats" component={ThreatsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
