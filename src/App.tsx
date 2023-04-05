import React from 'react';
import { IonReactRouter  } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonLoading, setupIonicReact, } from '@ionic/react';
import { AuthContext } from "./services/auth";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



/* Theme variables */
import './assets/styles/styles.scss';

/*Pages*/
import Home  from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/registration/Registration';
import AppTabs from './components/AppTabs/AppTabs';

/*Hooks*/
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from './services/firebase';

setupIonicReact();

const App: React.FC = () => {

  const [authState, setAuthState] = useState({loading:true, loggedIn:false});
  useEffect(() => {
    onAuthStateChanged(auth,(currentUser) => {
      setAuthState({loading:false, loggedIn:Boolean(currentUser)});
      // console.log(currentUser)
      // if (authState.loggedIn == false) {
      //   console.log("not logged");
      // }
    });
  }, []); // remembers the authentication state even if the app reloads


  // console.log(`rendering App with authState`, authState);
  if (authState.loading) {
    return <IonLoading isOpen />
  }

  return (
    <IonApp>
      <AuthContext.Provider value ={{loggedIn: authState.loggedIn}}>
      <IonReactRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login">
            <Login />   
          </Route>
          <Route exact path="/registration">
            <Registration />   
          </Route>
          <Route path="/my">
              <AppTabs />
          </Route>
          <Redirect exact path="/" to="/my/training" />
          </Switch>     
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;