import React, { useState } from 'react';
import Axios from 'axios';
import { Snackbar } from '@mui/material';

const From = ({ selectedValue }) => {



    const [userData, setUserData] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const toggleToast = () => {
        setShowMessage(!showMessage);
    };
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            let url;
            selectedValue === 'FAN'
                ? (url = 'http://wren.in:3200/api/sign-up/fan')
                : (url = 'http://wren.in:3200/api/sign-up/talent');

            const response = await Axios.post(url, userData);
            setShowMessage(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Snackbar
                open={showMessage}
                autoHideDuration={6000}
                onClose={() => setShowMessage(false)}
                message='Sign up Successfully'
            />
            <div className='flex text-2xl justify-center sm:mx-3 font-bold'>
                <h1>Create Your fan Account </h1>
            </div>
            <form onSubmit={handleSignup}>
                {/* {(errors.first_name || errors.last_name || errors.username || errors.email || errors.password) && <span>All dields are required!</span>} */}
                <div className='flex justify-center py-5 mx-2 sm:mx-5 flex-col'>
                    <label for='tittle'>Your Name</label>
                    <input
                        className='border-2 py-2 px-3 my-3 rounded-full hover:border-green-400 text-black'
                        name='first_name'
                        type='text'
                        placeholder='First Name'
                        // {...register("first_name", {required: true})}
                        onChange={handleChange}
                    />

                    <label for='tittle'>Last name</label>
                    <input
                        className='border-2 py-2 px-3 my-3 rounded-full hover:border-green-400 text-black'
                        name='last_name'
                        type='text'
                        placeholder='Last name'
                        // {...register("last_name", {required: true})}
                        onChange={handleChange}
                    />

                    <label for='tittle'>Username</label>
                    <input
                        className='border-2 py-2 px-3 my-3 rounded-full hover:border-green-400 text-black'
                        name='username'
                        type='text'
                        placeholder='Username'
                        // {...register("username", {required: true})}
                        onChange={handleChange}
                    />

                    <label for='tittle'>Email</label>
                    <input
                        className='border-2 py-2 px-3 my-3 rounded-full hover:border-green-400 text-black'
                        name='email'
                        type='text'
                        placeholder='Email'
                        // {...register("email", {required: true})}
                        onChange={handleChange}
                    />

                    <label for='tittle'>Password</label>
                    <input
                        className='border-2 py-2 px-3 my-3 rounded-full hover:border-green-400 text-black'
                        name='password'
                        type='password'
                        placeholder='Password'
                        // {...register("password", {required: true})}
                        onChange={handleChange}
                    />

                    <div className='flex justify-center py-4 '>
                        <p> I agree to the Terms and Conditions </p>
                    </div>

                    <div className='flex bg-green-400 hover:bg-green-500 mx-auto w-3/5 justify-center rounded-full'>
                        <button type='submit' className='py-3'>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default From;
