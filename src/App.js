import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import NavigationMenu from './components/Navigate';
import Home from './components/page/Home';
import Member from './components/page/Member';
import Project from './components/page/Project';
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <NavigationMenu />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/member' component={Member} />
        <Route path='/project' component={Project} />
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
