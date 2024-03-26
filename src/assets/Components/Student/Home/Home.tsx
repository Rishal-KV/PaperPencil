
import Nav from "../NavBar/Nav"
import Footer from "../Footer/Footer"
import Card from "../Cards/Card"
function Home() {
    return (
        <>
            <Nav />
            <div className="flex">

                <div className="flex h-1/2 w-full bg-blue-200  px-10">
                    <div className="lg:w-2/5 sm:w-5/5  mx-auto">
                        <img className="p-10 mx-auto" src="../images/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795-fotor-bg-remover-20240324123351.png" alt="" />
                    </div>
                    <div className="w-3/5 lg:flex  hidden">
                        <div className="lg:flex items-center  flex-row hidden ">
                            <div className="border-2 h-20 w-52 bg-gradient-to-r from-blue-400 to-indigo-700 rounded-md text-center p-2  ">
                                <i className=" text-white  text-3xl fa-solid fa-chalkboard-user"></i>
                                <h1 className="text-md  text-white   font-bold  ">Amazing Instructors</h1>
                            </div>
                            <div className="border-2 h-20 w-52 bg-gradient-to-r from-blue-400 to-indigo-700   m-8 mb-60 rounded-md text-center p-2">
                                <i className="text-3xl text-white  fa-brands fa-rocketchat"></i>
                                <h1 className="text-md text-white font-bold">Live Chat with instructors</h1>
                            </div>

                            <div className="border-2 h-20 w-52 bg-gradient-to-r from-blue-400 to-indigo-700   mt-40 rounded-md text-center p-2">
                                <i className="text-white text-3xl fa-solid fa-book"></i>
                                <h1 className="text-white font-bold">Learn From Anywhere</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className=" mx-auto ">
                <div className=" w-full h-full py-20 px-10 flex flex-col gap-4 lg:flex-row ">
                    <div className="rounded-md mx-auto lg:w-1/2 w-full bg-blue-500 h-auto md:h-80 flex md:flex-row flex-col justify-center items-center md:gap-10 p-5 md:p-0">
                        <div className="text-center md:text-left">
                            <img src="../images/certificate (1).png" className="w-52 mx-auto md:mx-0" alt="" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="font-bold text-3xl text-white">Get Certificate</h1>
                            <p className="text-white font-semibold">Add value to your certificates <br /> and increase your chance of <br /> getting hired on your dream <br /> job.</p>
                        </div>
                    </div>


                    <div className="rounded-md mx-auto lg:w-1/2 w-full bg-blue-500 h-auto md:h-80 flex md:flex-row flex-col justify-center items-center md:gap-10 p-5 ">
                        <div className=""  >
                            <img className="object-cover w-52 h-72" src="../images/teacher (2).png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-3xl">Are You A Certified Teacher ? </h1>
                            < button type="submit" className="border-2 mt-3 w-full text-white bg-gradient-to-r from-blue-400 to-indigo-700  text-center p-2  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Become An Instructor</button>
                        </div>

                    </div>

                </div>
            </div>
            <div >
                <h1 className="text-center font-bold text-2xl">Trending Courses</h1>
            </div>

            <Card />
            <Footer />
        </>

    )
}

export default Home