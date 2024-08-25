const Works = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-0">
      <div className="flex justify-between text-white p-4 text-xl md:text-3xl ">
        <p>Select works</p>
        <p>Gallery</p>
      </div>
      <div className="h-[650px] flex flex-col md:flex-row md:justify-between space-y-4 md:space-x-12 md:space-y-0 w-full">
        <img className="h-1/3 md:h-auto w-full md:w-1/3 object-cover rounded-md" src="https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="h-1/3 md:h-auto w-full md:w-1/3 object-cover rounded-md" src="https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="h-1/3 md:h-auto w-full md:w-1/3 object-cover rounded-md" src="https://images.unsplash.com/photo-1724166534407-260b512ef008?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
}

export default Works;
