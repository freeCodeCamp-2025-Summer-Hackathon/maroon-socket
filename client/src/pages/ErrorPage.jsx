import { Link } from 'react-router';

function ErrorPage() {
    return (
        <div className="min-h-screen grid place-content-center ps-4 gap-4 bg-secondary">
            <h1 className="text-8xl font-semibold font-poppins text-btn flex gap-4">
                404
                <span className="text-4xl  text-btn self-center font-poppins">
                    Not Found
                </span>
            </h1>
            <p className="text-primary font-poppins text-xl font-medium ">
                Oops this wasn't supposed to happen!, Let's get you back
                to&nbsp;
                <Link to="/" className="underline font-semibold">
                    Home
                </Link>
            </p>
        </div>
    );
}

export default ErrorPage;
