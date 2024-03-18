import './Login.css'
function Login() {
    return (

        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-800   ">
            <div className="flex justify-evenly items-center   p-11  rounded-xl shadow-xl  bg-white">
                
                <div className="w-96 mr-5  md:block hidden">
                    <img className="rounded-lg h-96 " src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo"  />
                </div>

                <div>
                    <div className="text-center mb-2 font-bold ">
                        <h1 className="font-bold text-4xl font">Login</h1>
                        <p className='font-medium'>we are glad to see yout back with us </p>
                    </div>

                    <form  action="">

                        <div  >
                            
                            <label htmlFor="email" className="block font-bold  text-sm  text-gray-900 dark:text-black">Email</label>
                            <input type="email"  className="  input-style   text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="email" required />

                        </div>

                        <div >
                            <label htmlFor="email" className="block font-bold   text-sm  text-gray-900 dark:text-">Password</label>
                            <input type="email"  className=" input-style text-sm rounded-lg block w-full p-2.5  " placeholder="password" required />

                        </div>
                        
                        <button type="button" className=" mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                        <span className="text-sm">
                           <p>New to here?<a className="underline text-cyan-600"  href=""> Sign Up</a></p>
                        
                        </span>
                    </form>
                    <div className=" input-style  flex  items-center justify-evenly mt-3 w-full text-black  font-bold rounded-lg  text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none border-gray-600 " >
                   <img className='w-6' src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="google logo" />
                        <h1 className='text-black' >Login with google</h1>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Login