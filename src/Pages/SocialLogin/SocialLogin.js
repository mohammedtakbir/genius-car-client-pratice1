import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import { setAuthToken } from '../API/Auth';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                setAuthToken(res);
                toast.success('sign in successfully!');
                console.log(res.user);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='text-center mt-3'>
            <small>
                <button onClick={handleGoogleSignIn} className='bg-slate-400 text-white px-3 py-1 rounded-md'>Login with Google</button>
            </small>
        </div>
    );
};

export default SocialLogin;