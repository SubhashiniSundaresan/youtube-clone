import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='app__page'>
          <Sidebar />
          <Switch>
            <Route path='/search/:searchText'>
              <SearchPage />
            </Route>
            <Route path='/'>
              <RecommendedVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
