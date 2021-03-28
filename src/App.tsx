import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer  from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="wrapper">
                    <Navbar/>
                    <main className="content">
                        <Route path="/dialogs" render={() => <DialogsContainer /> }/>
                        <Route exact path="/profile/:userId?" render={() => <ProfileContainer/> } />
                        <Route path="/users" render={() => <UsersContainer/>} />
                        <Route path="/login" render={() => <Login/>} />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;

