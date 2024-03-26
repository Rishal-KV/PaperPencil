import './Signup.css'
function Signup() {
  return (
    <>
       <div className="h-screen flex justify-center items-center bg-columbia ">
            <div className="flex justify-evenly items-center p-11 rounded-2xl shadow-xl bg-white">
                <div className="shadow-2xl w-96 mr-5 md:block hidden ">
                    <img className="rounded-lg h-96 s" src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1711214120~exp=1711214720~hmac=9125ef916b0b189e54d0c2de7e37e13283bf72d565df21ce5c6257e2669922be" alt="Logo" />
                </div>

                <div >
                    <div className="text-center mb-2 font-bold">
                        <h1 className="font-bold text-4xl font">Sign Up</h1>
                        <p className='font-medium'>We are glad to see you back with us.</p>
                    </div>

                    <form  action="">
                    <div>
                            <label htmlFor="name" className="block font-bold text-sm text-gray-900 dark:text-black ">Name</label>
                            <input type="text" className="mb-1 input-style text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name" autoCapitalize="off" required />
                        </div>
                    <div>
                            <label htmlFor="email" className="block font-bold text-sm text-gray-900 dark:text-black">Email</label>
                            <input type="email" className="mb-1 input-style text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block font-bold text-sm text-gray-900 dark:text-black">Email</label>
                            <input type="password" className="mb-1 input-style text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="password" required />
                        </div>

                        <div>
                            <label htmlFor="password" className="block font-bold text-sm text-gray-900 dark:text-black">Password</label>
                            <input type="password" className="mb-1 input-style text-sm rounded-lg block w-full p-2.5" placeholder="confirm Password" required />
                        </div>

                        <button type="submit" className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>

                        
                    </form>

                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup