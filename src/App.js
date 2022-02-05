import { useState } from 'react';
import './App.css';
import From from './components/From';
import classNames from 'classnames';
function App() {
    const [selectedValue, setSelectedValue] = useState('FAN');
    return (
        <>
            <div className='bg-black py-16'>
                <div className='flex justify-center rounded-xl bg-zinc-800 text-white w-11/12 sm:w-9/12 md:w-6/12 mx-auto'>
                    <div className='mt-10 w-full md:mx-10'>
                        <div className='flex py-6 justify-center'>
                            <button
                                className={classNames('rounded-full text-xl', {
                                    'bg-green-500': selectedValue === 'FAN',
                                })}
                                onClick={() => setSelectedValue('FAN')}
                            >
                                FAN SIGNUP
                            </button>
                            <button
                                className={classNames(`rounded-full text-xl`, {
                                    'bg-green-500': selectedValue === 'TALENT',
                                })}
                                onClick={() => setSelectedValue('TALENT')}
                            >
                                TALENT SIGNUP
                            </button>
                        </div>
                        <From selectedValue={selectedValue} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
