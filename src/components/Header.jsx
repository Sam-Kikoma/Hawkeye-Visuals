const Header = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-[90%]">
        <div>
            <h1 className="text-white text-center uppercase text-[4rem] md:text-[8rem] lg:text-[12rem] tracking-wide font-Playfair-Display font-normal">Hawkeye</h1>
        </div>
        <div className="">
            <img className="max-w-[100%] h-auto object-cover rounded-md" src="https://images.unsplash.com/photo-1724497508903-0ed09e9bec2d?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Header