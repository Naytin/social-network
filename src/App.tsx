import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import DialogsContainer  from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/store";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/actionsCreator/appAC";


class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp() //
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <div className="wrapper">
                        <Navbar/>
                        <main className="content">
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route exact path={["/", "/social-network"]} render={() => <Redirect to={"/profile"}/>}/>
                            <Route exact path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {initialized: state.app.initialized}
}

export default connect(mapStateToProps,{initializeApp})(App);

type PropsType = {
    initializeApp: () => void
    initialized: boolean
}
