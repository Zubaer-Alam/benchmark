import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookChat = () => {
    return (
        <FacebookProvider appId="123456789" chatSupport>
            <CustomChat pageId="123456789" minimized={true} />
        </FacebookProvider>
    )
}

export default FacebookChat