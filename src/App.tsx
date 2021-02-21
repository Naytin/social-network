import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer  from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="wrapper">
                    <Navbar/>
                    <main className="content">
                        <Route path="/dialogs" render={() => <DialogsContainer /> }/>
                        <Route exact path="/Profile" render={() => <ProfileContainer/> } />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;

