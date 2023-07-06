"use client"
import React from 'react'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function LoginForm() {
    return (
        <Box className='shadow-lg' marginTop={'1rem'} display={'flex'} width={'100vw'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant="h6" component="h2">
                SIGN IN
            </Typography>
            <Typography variant="subtitle2" component="h6">
                Don’t have an account?  <Link href={'/about'}>Sign Up</Link>
            </Typography>
            <Box padding={'1rem'} textAlign={'center'} width={'70vw'}>
                <Typography variant="subtitle2" component="h6">
                    Proin nibh nisl condimentum id venenatis. Gravida in fermentum et sollicitudin ac. Elementum sagittis vitae et leo duis ut diam quam nulla. Tincidunt nunc pulvinar sapien et ligula ullamcorper Privacy Policy.
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                component={'div'}
                marginTop={'1rem'}
                width={'50vw'}
                height={'50vh'}

            >
                <Box>social</Box>
                <Box>form</Box>
            </Box>
        </Box>
    )
}
