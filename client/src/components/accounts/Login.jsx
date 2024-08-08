import { Box, TextField, Button, styled } from '@mui/material';
import { useState } from 'react';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 3px; 
    box-shadow: 4px 2px 4px 2px rgba(0, 0, 0, 0.1);

`;

const Image = styled("img")({
    width: 100,
    margin: "auto",
    display: "block",
});

const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "14px", /* Spacing between elements */
});

const Para = styled("p")({
    textAlign: 'center',
    margin: '5px',
    fontSize: '14px',
    color:'gray'
});

const Btn = styled(Button)({
    textTransform: "none",
    background: " rgb(193, 47, 93);",
    color: "white",
    borderRadius: "4px",
    padding: "10px 20px",
    transition: "background 0.3s, transform 0.2s", /* Smooth transitions */
    '&:hover': {
        transform: "scale(1.05)", /* Slightly scale up on hover */
        background:"rgb(236, 45, 45)",
        color:"white"
        
    },
    '&:focus': {
        outline: "none",
        background:"orange",
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.3)", /* Focus ring */
    },
});

const StyledTextField = styled(TextField)({
    '& input': {
        borderRadius: "4px",
        padding: "10px",
        transition: "border-color 0.3s", /* Smooth border color transition */
    },
    '& .MuiInput-underline:before': {
        borderBottom: "1px solid #ccc", /* Default underline color */
    },
    '& .MuiInput-underline:hover:before': {
        borderBottom: "2px solid red", /* Underline color on hover */
    },
    '& .MuiInput-underline:after': {
        borderBottom: "2px solid red", /* Underline color on focus */
    },
    '& .MuiInputBase-input': {
        padding: "10px", /* Padding for text input */
    },
});

export default function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, setAccount] = useState('login');

    function toggleSignup() {
        setAccount(account === 'signup' ? 'login' : 'signup');
    }

    return (
        <Component>
            <Image src={imageURL} alt="Login" />
            <Wrapper>
                {account === 'login' ? (
                    <>
                        <StyledTextField variant="standard" placeholder='Enter your name' fullWidth />
                        <StyledTextField variant="standard" type="password" placeholder='Enter your password' fullWidth />
                        <Btn variant="contained">Login</Btn>
                        <Para>OR</Para>
                        <Btn variant="contained" onClick={toggleSignup}>Create an Account</Btn>
                    </>
                ) : (
                    <>
                        <StyledTextField variant="standard" placeholder='Enter name' fullWidth />
                        <StyledTextField variant="standard" placeholder='Enter username' fullWidth />
                        <StyledTextField variant="standard" type="password" placeholder='Enter password' fullWidth />
                        <Btn variant="contained">Sign Up</Btn>
                        <Para>OR</Para>
                        <Btn variant="contained" onClick={toggleSignup}>Already have an Account</Btn>
                    </>
                )}
            </Wrapper>
        </Component>
    );
}
