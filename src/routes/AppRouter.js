import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
    return ( 
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter}/>
                    // eslint-disable-next-line
                    <Route exact path="/" component={JournalScreen}/>
                    // eslint-disable-next-line
                </Switch>
            </div>
        </Router>
     );
}
 
export default AppRouter;