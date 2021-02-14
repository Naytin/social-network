import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer  from './components/Dialogs/DialogsContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="wrapper">
                    <Navbar/>
                    <main className="content">
                        <Route path="/dialogs" render={() => <DialogsContainer /> }/>
                        {/*<Route path="/dialogs"*/}
                        {/*       render={() => <Dialogs dispatch={dispatch} dialogs={state.dialogsPage.dialogs}*/}
                        {/*                              messages={state.dialogsPage.messages}*/}
                        {/*                              newMessageText={state.dialogsPage.newMessageText}/>}/>*/}
                        {/*<Route exact path="/Profile"*/}
                        {/*       render={() => <Profile dispatch={dispatch} posts={state.profilePage.posts}*/}
                        {/*                              newPostText={state.profilePage.newPostText}/>}/>*/}
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;

