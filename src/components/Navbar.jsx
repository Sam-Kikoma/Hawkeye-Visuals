import { useState, useEffect } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

// Disable body scroll when the mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);
  
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className='w-full h-[90px] text-white border-white border-b-[1px]'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center h-full w-[90%]'>
        <div>
          <h1 className="tracking-widest uppercase md:text-xl">Hawkeye photography</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4 cursor-pointer">
            <li className="hover:underline">About</li>
            <li className="hover:underline">Pricing</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <CgClose size={30}/> : <CgMenu size={30}/>}
        </div>
        {/* Mobile menu */}
        <div className={
          nav ? "w-full h-[100vh] absolute top-[90px] left-0 md:hidden text-2xl flex justify-center" 
          : "absolute left-[-100%]"
        }>
          <ul className="flex flex-col items-center gap-4 mt-20 text-3xl">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
