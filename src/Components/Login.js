import React from 'react'
import styled from 'styled-components';
import { GoogleProvider } from "../config/authMethods";
import socialMediaAuth from '../service/auth';
function Login() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);

    };
    return (
      <Container>
          <HeaderPlace>
          <Logo src="/image/slack-logo.svg" />
          <LoginText>
              <span>Let's find your team</span>
              <p>We suggest using the <b>email address you use at work.</b></p>
          </LoginText>
          <UpperButton>
              <GoogleButton onClick={() => handleOnClick(GoogleProvider)}>
                  <img src="/image/search.png" alt=" "/>
                  <span>Continue with Google</span>
              </GoogleButton>
              <AppleButton>
              <img src="/image/apple.png" alt=" "/>
              <span>Continue with Apple</span>
              </AppleButton>
          </UpperButton>
          <MiddlePlace>
          <MiddleLine> </MiddleLine>
              <span>OR</span>
              <MiddleLine> </MiddleLine>
          </MiddlePlace>
          <EmailLogin>
              <EmailInput> 
              <input type="text" placeholder="name@work-email.com"/>
              </EmailInput>
              <EmailButton>
                  Continue with Email
              </EmailButton>
          </EmailLogin>
          </HeaderPlace>
          <FooterPlace>
          <FooterSlack>
              <a>
              Privacy and Terms
              </a>
              <a>
              Contact Us
              </a>
              <a> 
            Change region
            </a>
          </FooterSlack>
          </FooterPlace>
      </Container>
    )
    }

export default Login

const Container = styled.div`
background: #FFFFFF;
display: flex;
flex-direction: column;
margin-top: 40px;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
`
const Logo = styled.img`
width: 180px;
object-fit: contain;
cursor: pointer;
`;
const LoginText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
span {
    text-align: center;
    font-size: 50px;
    color: #1D1C1D;
    font-weight: 700;
    padding-top: 40px;
    width: 500px;
}
p {
    color: #454245;
    font-size: 18px;
    letter-spacing: 0.4px;
    font-weight: 300;
}
`;
const UpperButton = styled.div`

`;
const MiddleLine = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 180px;
height: 1px;
background-color: lightgray;
margin: 20px;

`;
const EmailLogin = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
input {
    border: 2px solid red;
    width: 534px;
    height: 40px;
    border: none;
    outline: none;
    text-indent: 20px;
    font-size: 18px;
    ::placeholder {
        font-weight: 200;
    }
    
} 
`;
const FooterSlack = styled.div`
a {
    padding: 10px;

    &:hover {
        color: #4285F4;
        text-decoration: underline;
    }
}
`;
const AppleButton = styled.span`
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #1D1C1D;
font-size: 18px;
font-weight: 750;
padding: 3px 100px; 
border-radius: 5px;
color: #1D1C1D;
margin: 20px;
cursor: pointer;
img {
    width: 20px;
    height: 100%;
    padding: 10px;
}
&:hover {
    box-shadow: 3px 2px 34px -12px rgba(0,0,0,0.29);
}
`;
const GoogleButton = styled(AppleButton)`
border: 2px solid #4285F4;
color: #4285F4;
`;
const EmailButton = styled.div `
color: white;
font-weight: 700;
font-size: 18px;
 width: 434px;
 height: 45px;
 border-radius: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: rgba(73, 21, 75, 1);
 cursor: pointer;
 &:hover {
    background-color: rgba(73, 21, 75, .9);
 }
`;

const EmailInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.4);
height: 45px;
width: 430px;
border-radius: 5px;
margin-bottom: 20px;

`;

const HeaderPlace = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const FooterPlace = styled.div`
cursor: pointer;
margin-bottom: 20px;`;

const MiddlePlace = styled.div `
display: flex;
justify-content: center;
align-items: center;

`;
