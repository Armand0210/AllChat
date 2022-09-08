import React from "react";
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css';

import { ChannelListContainer, ChannelContainer } from "./Components";
const apiKey = 'er6gq87cht8r';
const client = StreamChat.getInstance(apiKey);


const app = () => {
    return <div>
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                />

                <ChannelContainer
                />
            </Chat>
        </div>
    </div>;
};

export default app;
