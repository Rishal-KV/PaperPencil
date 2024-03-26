import './Login.css';
import Nav from '../NavBar/Nav';

function Login() {
    return (
        <>
        <Nav/>
        <div className="h-screen flex justify-center items-center bg-gradient-to-r  bg-columbia">
            <div className="flex justify-evenly items-center p-11 rounded-xl shadow-xl bg-white">
                <div className="w-96 mr-5 md:block hidden shadow-2xl rounded-lg">
                    <img className="rounded-lg h-96" src="https://img.freepik.com/free-vector/online-certification-concept_23-2148575652.jpg?t=st=1711214870~exp=1711215470~hmac=ac56cc9c50a479d330845fd8f120ca0b616ef7146a991fdbfd55b594d46a4dbc" alt="Logo" />
                </div>

                <div>
                    <div className="text-center mb-2 font-bold">
                        <h1 className="font-bold text-4xl font">Login</h1>
                        <p className='font-medium'>We are glad to see you back with us.</p>
                    </div>

                    <form action="">
                        <div>
                            <label htmlFor="email" className="block font-bold text-sm text-gray-900 dark:text-black">Email</label>
                            <input type="email" className="input-style text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required />
                        </div>

                        <div>
                            <label htmlFor="password" className="block font-bold text-sm text-gray-900 dark:text-black">Password</label>
                            <input type="password" className="input-style text-sm rounded-lg block w-full p-2.5" placeholder="Password" required />
                        </div>

                        <button type="submit" className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>

                        <span className="text-sm">
                            <p>New to here? <a className="underline text-cyan-600" href="">Sign Up</a></p>
                        </span>
                    </form>

                    <div className="input-style flex items-center justify-evenly mt-3 w-full text-black font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none border-gray-600">
                        <img className="w-6" src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google Logo" />
                        <h1 className="text-black">Login with Google</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
