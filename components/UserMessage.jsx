import React, { Component } from 'react'
import styled from "styled-components";
import { Store, CTX } from '../components/Store'

const UserMesssage = () => {

    const [allChats] = React.useContext(CTX);
    const channel = Object.keys(allChats);
    const [activeChannel, changeActiveChannel] = React.useState(channel[0])

    return (
        <div>
            <div>
                {
                    allChats[activeChannel].map((chat, i) => (
                        <UserMessageWrapper> <UserName><p>{chat.from}</p></UserName><UserMessageStyle><p>{chat.msg}</p></UserMessageStyle></UserMessageWrapper>
                    ))
                }
            </div>
        </div>
    )
}

const UserName = styled.div`
color: white;
height: 50px;
width: 50px;
`

const UserMessageWrapper = styled.div`
display: flex;
height: 80px;
width: 500px;
color: white;
`

const UserMessageStyle = styled.div`
color: white;
`
export default UserMesssage;