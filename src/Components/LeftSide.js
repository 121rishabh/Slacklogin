import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LockSharpIcon from '@material-ui/icons/LockSharp';


function LeftSide() {
    return (
        <Container>
        <LeftOne>
            <SquareOne />
            <SquareTwo />
            <CustomAdd style={{ fontSize: 30 }}/>
        </LeftOne>
        <LeftTwo>
            <LeftTwoUp>
            <LLText>
                <UpTextLL>
                <span>
                    Ryle Inc.
                </span>
                <CustomMore style={{ fontSize: 20 }}/>
                </UpTextLL>
                <DownTextLL>
                <OnlineCheck />
                    <span>
                        Rishabh Singh Rajawat
                    </span>
                </DownTextLL>
               
            </LLText>
            <LRText>
                   <CustomPost/>
            </LRText>
            </LeftTwoUp>
            <LeftTwoUpTwo>
                       <ListUpTwo>
                       <SubjectIcon/>
                           <span>All unreads</span>
                       </ListUpTwo>
                       <ListUpTwo>
                           <CommentOutlinedIcon/>
                           <span>Threads</span>
                       </ListUpTwo>
                       <ListUpTwo>
                           <AlternateEmailOutlinedIcon/>
                           <span> Mentions and reactions</span>
                       </ListUpTwo>
                       <ListUpTwo>
                           <ArrowDownwardIcon/>
                           <span>Show more</span>
                       </ListUpTwo>
            </LeftTwoUpTwo>
            <LeftTwoUpThree>
                <ThreeHeader>
                    <CustomDropDown/>
                        <span>Marketing team</span>
                </ThreeHeader>
                <SubRooms>
                    <ListThree>
                <span>#  design-crit</span>
                </ListThree>
                <ListThree>
                <span>#  design-team</span>
                </ListThree>
                <ListThree>
                <span>#  Hubspot</span>
                </ListThree>
                <ListThree>
                <span>#  social-media</span>
                </ListThree>
                <ListThree>
                    <TeamChat>
                <CustomLock style={{ fontSize: 17 }}/>
                <span>team-chat</span>
                </TeamChat>
                </ListThree>
                </SubRooms>
            </LeftTwoUpThree>
            <LeftTwoUpThree>
                <ThreeHeader>
                    <CustomDropDown/>
                        <span>Announcements</span>
                </ThreeHeader>
                <SubRooms>
                    <ListThree>
                <span>#  announcements</span>
                </ListThree>
                <ListThree>
                <span>#  media-and-pr</span>
                </ListThree>
                <ListThree>
                <span>#  released</span>
                </ListThree>
                <ListThree>
                <span>#  team-sf</span>
                </ListThree>
                <ListThree>
                    <TeamChat>
                <CustomLock style={{ fontSize: 17 }}/>
                <span>team-chat</span>
                </TeamChat>
                </ListThree>
                </SubRooms>
            </LeftTwoUpThree>
        </LeftTwo>
        </Container>
    )
}

export default LeftSide

const Container = styled.div`
background-color: #3D103F;
display: flex;
position: fixed;
`;

const LeftOne = styled.div`
border-right: 1px solid rgba(255, 255, 255, 0.1);
background-color: #3D103F;
flex: 0.1;
max-width: 100px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 5px;


`;

const SquareOne = styled.div`
    margin-top: 20px;
    background-color: #E01D5A;
    border: 2px solid white;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 0 5px #3D103F inset;
    box-sizing: border-box;
    border-radius: 9px;

`;
const SquareTwo = styled(SquareOne)`
margin-top: 20px;
border: none;
height: 50px;
width: 50px;
background: #DE4E2A;
`;

const CustomAdd = styled(AddIcon)`
color: white;
padding: 20px;

`;

const LLText = styled.div``;
const LeftTwo = styled.div`
flex: 0.4;
max-width: 350px;
border-right: 1px solid rgba(255, 255, 255, 0.1);
`;
const LRText = styled.div`
width: 40px;
height: 40px;
background-color: white;
color: #3D103F;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 2px;
margin: 20px 20px;
margin-right: 15px;
margin-top: 15px;

`;
const UpTextLL = styled.div`
display: flex;
align-items: center;
font-weight: 800;
padding: 10px;
padding-left: 20px;
font-size: 18px;
`;
const CustomMore = styled(ExpandMoreIcon)``;
const DownTextLL = styled.div`
display: flex;
align-items: center;
padding-left: 10px;
span {
padding-left: 5px;
color: rgba(255, 255, 255, 0.7);
font-weight: 400;
}

`;
const OnlineCheck = styled.div`
width: 12px; 
height: 12px;
background-color: #25BC76;
border-radius: 50%;
margin-left: 9px;
`;
const CustomPost = styled(PostAddIcon)``;
const LeftTwoUp = styled.div`
display: flex;
justify-content: space-between;
color: white;
margin-top: 12px;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);`;

const LeftTwoUpTwo = styled.div`
color: white;
padding: 10px;
display: flex;
flex-direction: column;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const ListUpTwo = styled.div`
display: flex;
align-items: center;
padding: 10px;
color: rgba(255, 255, 255, 0.6);
transition: 100ms ease-in;

span {
    padding: 0 10px;
   
}
&:first-child {
    color: white;
}
&:hover {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    color: #3D103F;
}
`;

const ListThree = styled.div`
padding-left: 40px;
padding: 10px;
margin-left: 50px;
display: flex;
align-items: center;
justify-content: flex-start;
color: rgba(255, 255, 255, 0.6);
font-weight: 400;
font-size: 16px;
&:first-child {
    background-color: rgb(21,99,163);
    color: white;
    border-radius: 15px;
    font-weight: 600;
}
`;
const SubRooms = styled.div``;
const ThreeHeader = styled.div`
display: flex;
align-items: center;
padding: 10px;
font-size: 18px;
color: rgba(255, 255, 255, 0.8);
span{
 padding-left: 10px;
 font-weight: 600;
} `;
const LeftTwoUpThree = styled.div`
color: white;
padding: 10px;
`;
const CustomDropDown = styled(ArrowDropDownIcon)`
`;
const CustomLock = styled(LockSharpIcon)`
padding-right: 10px;
`;

const TeamChat = styled.div`
display: flex;
align-items: center;
justify-content: flex-center;
margin-left: -5px;
`;