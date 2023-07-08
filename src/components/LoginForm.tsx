"use client"
import React from 'react'
import { Box, Button, Typography, Stack, Alert } from '@mui/material';
import Link from 'next/link';
import { BiLogoFacebook, BiLogoTwitter, BiLogoGoogle } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";



import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

type FormValues = {
    email: string;
    password: string;
}
export default function LoginForm() {

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { register, handleSubmit } = form


    const onSubmit = async (data: FormValues) => {
        console.log(data)

        let result = null,
            error = null;
        try {
            result = await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (e) {
            error = e;
        }

        console.log(result)

    }

    return (
        <Box sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
        }} marginTop={'1rem'} display={'flex'} width={'100vw'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant="h6" component="h2">
                SIGN IN
            </Typography>
            <Typography variant="subtitle2" component="h6">
                Don’t have an account?  <Link href={'/about'}>Sign Up</Link>
            </Typography>
            <Box bgcolor={'#FAF9F7'} padding={'1rem'} textAlign={'center'} display={'flex'} justifyContent={'center'}>
                <Box width={'60%'}>
                    <Typography variant="subtitle2">
                        Proin nibh nisl condimentum id venenatis. Gravida in fermentum et sollicitudin ac. Elementum sagittis vitae et leo duis ut diam quam nulla. Tincidunt nunc pulvinar sapien et ligula ullamcorper <Link href={'/privacy-policy'}>Privacy Policy</Link>.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    component={'div'}
                    marginTop={'2rem'}
                    marginBottom={'5rem'}
                    gap={'1rem'}
                >
                    <Box display={'flex'} gap={'1rem'} width={'50vw'} justifyContent={'space-around'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'} width={'100vw'} gap={'1rem'}>
                            <Button sx={{
                                justifyContent: 'flex-start',
                                fontSize: '3rem',
                                height: '3rem',
                                bgcolor: '#45619D'
                            }} size='large' variant="contained">
                                <BiLogoFacebook size={'20px'} />
                            </Button>
                            <Button sx={{
                                justifyContent: 'flex-start',
                                fontSize: '3rem',
                                height: '3rem',
                                bgcolor: '#00ACED'
                            }} size='large' variant="contained">
                                <BiLogoTwitter size={'20px'} />
                            </Button>
                            <Button sx={{
                                justifyContent: 'flex-start',
                                fontSize: '3rem',
                                height: '3rem',
                                bgcolor: '#EA4335'
                            }} size='large' color='error' variant="contained">
                                <BiLogoGoogle size={'20px'} />
                            </Button>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} width={'100vw'}>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate >
                                <Stack spacing={2}>
                                    <label>Sign In with Email</label>
                                    <TextField sx={{
                                        height: '3rem'
                                    }} label="Email" type="email" {...register("email")} />
                                    <TextField sx={{
                                        height: '3rem'
                                    }} label="Password" type="password" {...register("password")} />
                                    <Button color='primary' sx={{
                                        height: '3rem'
                                    }} type='submit' variant='contained' >SIGN IN</Button>

                                    <Link href={'/forgot-password'}>forgot password?</Link>
                                </Stack>
                            </form>
                        </Box>
                    </Box>
                    <Box width={'50vw'}>
                        <Alert severity="error">Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.</Alert>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
