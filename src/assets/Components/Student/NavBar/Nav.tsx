

function Nav() {
  return (
    <>
    <div className="flex justify-between h-15  items-center shadow-2xl  ">
        <div>
            <img className="h-16" src="../images/ppBlue.png" alt="paper-pencil-logo" />
        </div>
        <div className="   flex">
        <h1 className="mr-10 font-bold">Home</h1>
        <h1 className="mr-10 font-bold">My Courses</h1>
        <h1 className="mr-10 font-bold">Chats</h1>
        <h1 className="mr-10 font-bold">Courses</h1>
      
        </div>
        <div>
      
        <svg
  className="h-10 w-10 fill-current border-4 border-black rounded-lg border-opacity-30 md:block  lg:hidden"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    
    d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
  />
</svg>

  </div>
    </div>
    </>
  )
}

export default Nav