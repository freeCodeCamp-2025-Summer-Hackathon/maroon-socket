import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import SignupSuccessCard from '../components/SIgnupSuccessCard';

function SignUp() {
    const [signupSuccess, setSignupSuccess] = useState(false);

    return signupSuccess ? (
        <SignupSuccessCard />
    ) : (
        <SignupForm setSignupSuccess={setSignupSuccess} />
    );
}

export default SignUp;
