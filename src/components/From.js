import React from 'react';


const From = () => {
    
    return (
        <>
            {/* <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box> */}
            <div className='bg-black py-16'>
                <div className='flex justify-center rounded-xl bg-zinc-800 text-white mx-80 '>
                    <div className='mt-10 w-6/12'>
                        <div className='flex py-6 justify-center'>
                            <button className=' active:bg-green-500 rounded-full text-xl'>FAN SIGNUP</button>
                            <button className='bg-green-500 rounded-full text-xl'>TALENT SIGNUP</button>
                        </div>
                        <div className='flex text-2xl justify-center font-bold'>
                            <h1>Create Your fan Account </h1>
                        </div>
                        <form>
                            <div className='flex justify-center py-5 mx-10 flex-col'>
                                <label for="tittle">Your Name</label>
                                <input className='border-2 py-2 my-3 rounded-full hover:border-green-400 '
                                    name='tittle'
                                    type="text"
                                    placeholder='Your Name'
                                />

                                <label for="tittle">Last name</label>
                                <input className='border-2 py-2 my-3 rounded-full hover:border-green-400 '
                                    name='Last name'
                                    type="text"
                                    placeholder='Last name'
                                />

                                <label for="tittle">Username</label>
                                <input className='border-2 py-2 my-3 rounded-full hover:border-green-400 '
                                    name='Username'
                                    type="text"
                                    placeholder='Username'
                                />

                                <label for="tittle">Email</label>
                                <input className='border-2 py-2 my-3 rounded-full hover:border-green-400 '
                                    name='Email'
                                    type="text"
                                    placeholder='Email'
                                />

                                <label for="tittle">Password</label>
                                <input className='border-2 py-2 my-3 rounded-full hover:border-green-400 '
                                    name='Password'
                                    type="password"
                                    placeholder='Password'
                                />

                                <div className='flex justify-center py-4 '>
                                    <p> I agree to the Terms and Conditions </p>
                                </div>

                                <div className='flex bg-green-400 hover:bg-green-500 mx-auto w-3/5 justify-center rounded-full'>
                                    <button className="py-3">
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default From;