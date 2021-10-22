import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsType, storeType} from "./Redux/State";
import {Friends} from "./components/Friends/Friends";
import {Regestration} from "./components/Regestration/Regestration";

type AppProps = {
  store: storeType
  dispatch: (action: ActionsType) => void
}

const App = (props: AppProps) => {

  const state = props.store.getState();

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={state.DialogPage.dialogsData}
                                                          messages={state.DialogPage.messages}/>}/>
            <div className='app-wrapper-profile'>
              <Route path='/profile' render={() => <Profile posts={state.ProfilePage.posts}
                                                            profileInfo={state.ProfilePage.profileInfo}
                                                            dispatch={props.dispatch}
                                                            newPostText={state.ProfilePage.newPostText}/>}/>
            </div>
            <Route path='/reg' render={() => <Regestration/>}/>
            <Route path='/friends' render={() => <Friends/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;


