import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { API } from '../../service/api';

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
    gap: "14px",
});

const Para = styled("p")({
    textAlign: 'center',
    margin: '5px',
    fontSize: '14px',
    color: 'gray'
});

const Btn = styled(Button)({
    textTransform: "none",
    background: "rgb(193, 47, 93)",
    color: "white",
    borderRadius: "4px",
    padding: "10px 20px",
    transition: "background 0.3s, transform 0.2s",
    '&:hover': {
        transform: "scale(1.05)",
        background: "rgb(236, 45, 45)",
        color: "white"
    },
    '&:focus': {
        outline: "none",
        background: "orange",
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.3)",
    },
});

const StyledTextField = styled(TextField)({
    '& input': {
        borderRadius: "4px",
        padding: "10px",
        transition: "border-color 0.3s",
    },
    '& .MuiInput-underline:before': {
        borderBottom: "1px solid #ccc",
    },
    '& .MuiInput-underline:hover:before': {
        borderBottom: "2px solid red",
    },
    '& .MuiInput-underline:after': {
        borderBottom: "2px solid red",
    },
    '& .MuiInputBase-input': {
        padding: "10px",
    },
});

export default function Login() {
    const signupInitialValues = {
        name: "",
        username: "",
        password: ""
    };

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, setAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    async function signupUser() {
        console.log('Sending signup data:', signup); // Log payload
        try {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                setError("");
                setSignup(signupInitialValues);
                setAccount('login');
            } else {
                setError(response.msg.message || "Something went wrong, please try again.");
            }
        } catch (err) {
            setError("An unexpected error occurred.");
            console.error("Signup error:", err);
        }
    }

    function toggleSignup() {
        setAccount(account === 'signup' ? 'login' : 'signup');
    }

    function onInputChange(e) {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        });
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
                        <StyledTextField variant="standard" onChange={onInputChange} name="name" placeholder='Enter name' fullWidth />
                        <StyledTextField variant="standard" onChange={onInputChange} name="username" placeholder='Enter username' fullWidth />
                        <StyledTextField variant="standard" onChange={onInputChange} name="password" type="password" placeholder='Enter password' fullWidth />

                        {error && <Typography>{error}</Typography>}

                        <Btn variant="contained" onClick={signupUser}>Sign Up</Btn>
                        <Para>OR</Para>
                        <Btn variant="contained" onClick={toggleSignup}>Already have an Account</Btn>
                    </>
                )}
            </Wrapper>
        </Component>
    );
}
