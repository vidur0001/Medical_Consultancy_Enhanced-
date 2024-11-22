import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const roomPage =()=>{
    const {roomId}=useParams();
    let myMeeting = async (element) => {

        // generate Kit Token
        const appID = 880011707;
        const serverSecret = "146d773800d037e8f388e4e1d7674869";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId,  
            Date.now.toString(),
            "Vidur",
        );
       
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference,// which type of application it is
            }
        });
    };
    return(
    <div className='room-page'>
    <div ref={myMeeting}/>
    </div>
    );
};
export default roomPage;