import React from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
function Chat() {
    return (
        
        <div style={{ "marginTop": "80px" }}>
            <div className="container flex-column" style={{ "height": "500px" }}>
                <div>
                    
                </div>
                <div className="chat-window mx-auto border h-100">
                    
                    <div className="right-chat-parent">
                        <div className="right-chat">
                            <p className="m-0">Hello I am Alexa...</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat">
                            <p className="m-0">How can I help You</p>
                        </div>
                    </div>
                    <div className="left-chat-parent">
                        <div className="left-chat" >
                            <p className="m-0">where is my product</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat" >
                            <p className="m-0">these is product info</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat">
                            <p className="m-0">Hello I am Alexa...</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat">
                            <p className="m-0">How can I help You</p>
                        </div>
                    </div>
                    <div className="left-chat-parent">
                        <div className="left-chat" >
                            <p className="m-0">where is my product</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat" >
                            <p className="m-0">these is product info</p>
                        </div>
                    </div>
                    <div className="left-chat-parent">
                        <div className="left-chat" >
                            <p className="m-0">where is my product</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat">
                            <p className="m-0">How can I help You</p>
                        </div>
                    </div>
                    <div className="left-chat-parent">
                        <div className="left-chat" >
                            <p className="m-0">where is my product</p>
                        </div>
                    </div>
                    <div className="right-chat-parent">
                        <div className="right-chat" >
                            <p className="m-0">these is product info</p>
                        </div>
                    </div>
                </div>

                <div className="chat-input d-flex justify-content-center align-items-center align-items-end my-3" >
                    <input type="text" className="loginInput mb-3 w-50 rounded-25-imp" name="email" autocomplete="off" />
                   <SendRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
