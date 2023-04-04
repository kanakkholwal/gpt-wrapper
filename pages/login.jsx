import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// Components 
import PasswordInput from "components/form-elements/PasswordInput";
import Button from "components/buttons";
import { FormElement, Label, FormAlert, Input } from "components/form-elements";
import styled from "styled-components";
import illustration from "assets/images/login-illustration.webp";

const PageWrapper = styled.div`
display: flex;
align-items: stretch;
justify-content: center;
width: 100%;
height: 100vh;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`;
const Illustration = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
background-color: rgba(var(--theme-rgb), 0.1);
@media (max-width: 768px) {
    display: none;
}
position: relative;
h2{
    margin-top: 100px;
}
img {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    object-fit: cover;
    object-position: center;
    z-index: -1;
}
`;

const FormWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
padding: 2rem 1.5rem;
gap: 1rem;
text-align: left;
`;


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
width: clamp(300px, 100%, 400px);
gap: 1rem;
${FormElement} {
    width: 100%;
}
${Button} {
    width: 75%;
    max-width: 240px;
    text-align: center;
    margin-inline: auto;
}
`;

export const metadata = {
    title: "Login",
    description: "Login to your account",
    keywords: "Login, Account, Dashboard",
    // image: "/assets/images/illustration_dashboard.webp",
    url: "/login"
}

export default function Login({ }) {
    const { status } = useSession();
    const router = useRouter();
    const [state, setState] = useState({
        email: {
            value: "",
            error: false,
            errorMessage: ""
        },
        password: {
            value: "",
            error: false,
            errorMessage: ""
        },
        recaptcha: {
            verified: true,
            error: false,
            errorMessage: ""
        },
        state: "initial" || "error" || "success" || "loading"
    });


    if (status === "loading") {
        return "Loading...";
    }

    if (status === "authenticated") {
        router.push('/dashboard');
    }


    const isEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleCaptcha = async (value) => {


        await axios.post("/api/recaptcha", {
            token: value
        }).then((response) => {
            // console.log(response);
            setState({
                ...state,
                recaptcha: {
                    verified: response.data.verified,
                    error: !response.data.verified,
                    errorMessage: ""
                }
            })

        }).catch((error) => {
            console.log(error);
            setState({
                ...state,
                recaptcha: {
                    verified: false,
                    error: true,
                    errorMessage: error.message || "Something went wrong"
                }
            })
        })

    }


    async function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = state.email.value;
        const enteredPassword = state.password.value;

        if (!isEmail(enteredEmail)) {

            setState({
                ...state,
                email: {
                    value: state.email.value,
                    error: true,
                    errorMessage: "Please enter a valid email"
                }
            })
            return;
        }
        if (state.recaptcha.verified === false) {

            setState({
                ...state,
                recaptcha: {
                    verified: false,
                    error: true,
                    errorMessage: "Please verify that you are not a robot"
                }
            })
            return;
        }


        // optional: Add validation here

        await signIn('credentials', {
            redirect: '/dashboard',
            email: enteredEmail,
            password: enteredPassword,
        }).then((data) => console.log(data))
            .catch((error) => console.log(error));





    }
    return (


        <PageWrapper>
            <Illustration>
                <h2>Hi,Welcome Back</h2>
                <Image src={illustration} width="600" height="600" alt="Dashboard Illustration" priority={true} />

            </Illustration>
            <FormWrapper>

                <Form onSubmit={submitHandler}>
                    <h2>Welcome back !!</h2>
                    <p>Sign in to your account to continue</p>
                    <FormElement>
                        <Input type="email" placeholder="Enter your Email" outlined value={state.email.value}
                            id="email" required onChange={(e) => {
                                setState({
                                    ...state,
                                    email: {
                                        value: e.target.value,
                                        error: !isEmail(e.target.value),
                                        errorMessage: "Please enter a valid email"
                                    }
                                })
                            }}
                            className={state.email.error ? "isInvalid" : ""}
                        />
                        <Label>Enter Your Email</Label>
                        {state.email.error && <FormAlert nature="danger">{state.email.errorMessage}</FormAlert>}
                    </FormElement>
                    <FormElement>
                        <PasswordInput placeholder="Enter your Password" outlined
                            id="password" required
                            value={state.password.value}
                            className={state.password.error ? "isInvalid" : ""}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    password: {
                                        value: e.target.value,
                                        error: false,
                                        errorMessage: ""
                                    }
                                })
                            }}
                        />
                        {state.password.error && <FormAlert nature="danger">{state.password.errorMessage}</FormAlert>}
                        <Label>Enter Your Password</Label>

                    </FormElement>
                    <p><Link href="/forgot-password">Forgot Password? </Link></p>

                    <FormElement align="center">
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={handleCaptcha}
                        />
                        {state.recaptcha.error && <FormAlert nature="danger">{state.recaptcha.errorMessage}</FormAlert>}
                    </FormElement>
                    <Button type="submit" onClick={submitHandler}>Login </Button>
                    <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
                </Form>


            </FormWrapper>


        </PageWrapper >
    )
}
