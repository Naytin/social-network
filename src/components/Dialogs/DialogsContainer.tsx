import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AddMessage, AddNewMessageText} from "../../redux/actionsCreator/dialogsAC";


class DialogsContainer extends  React.Component {


    render() {

        return (
            <h1>sasa</h1>
            // <Dialogs  dialogs={this.props}
            //                                           messages={this.props.messages}
            //                                           newMessageText={}/>}/>
        )
    }
}

const mapStateToProps = (state: stateType) => ({
    dialogsPage: state.dialogsPage
}
)
export default connect(mapStateToProps, {AddMessage,AddNewMessageText})(DialogsContainer)