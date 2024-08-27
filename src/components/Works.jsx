const Works = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-0 w-[90%] mt-12">
      <div className="flex justify-between text-white text-xl md:text-3xl my-8">
        <p>Select works</p>
        <p><a href="" className="underline">Gallery</a></p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 w-full">
        <img className="h-1/3 md:h-auto w-full md:w-[30%] object-cover rounded-md" src="https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="h-1/3 md:h-auto w-full md:w-[30%] object-cover rounded-md" src="https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="h-1/3 md:h-auto w-full md:w-[30%] object-cover rounded-md" src="https://images.unsplash.com/photo-1724166534407-260b512ef008?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
}

export default Works;
