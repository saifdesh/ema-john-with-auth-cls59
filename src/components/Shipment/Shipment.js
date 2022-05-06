import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setaddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)

    }


    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }



    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Your Shipping info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>

                        <input onBlur={handleEmailBlur} type='text' name='name' placeholder='Your name' required />
                    </div>
                    <div className='input-group'>

                        <input value={user?.email} readOnly type='email' name='email' placeholder='Email' required />
                    </div>

                    <div className='input-group'>

                        <input onBlur={handleAddressBlur} type='text' name='address' placeholder='Address' required />
                    </div>
                    <div className='input-group'>

                        <input onBlur={handlePhoneBlur} type='text' name='address' placeholder='Phone number' required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type='submit' value='Ad Shipping' />

                </form>

            </div>

        </div>
    );
};

export default Shipment;
<h2>This is Shipment</h2>