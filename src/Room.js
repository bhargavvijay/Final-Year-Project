import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Room() {
    const params = useParams();
    const roomContainer = useRef(null);

    useEffect(() => {
        const initMeeting = async () => {
            const appId = 183231910;
            const serverSecret = '0594a5d1a8dba405c8232e126ecdec3e';
            
            // Correct usage of Date.now().toString() and a proper user ID
            const keyToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                params.id,
                Date.now().toString(), // Unique user ID
                'user-' + Date.now() // Unique username for the session
            );

            const zp = ZegoUIKitPrebuilt.create(keyToken);
            zp.joinRoom({
                container: roomContainer.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        };

        initMeeting();
    }, [params.id]); // Ensures effect runs when `params.id` changes

    return (
        <div 
            ref={roomContainer} 
            style={{ width: '100vw', height: '100vh' }}
        >
            Room
        </div>
    );
}
