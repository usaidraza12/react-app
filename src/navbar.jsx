function Navbar({post,setpost}) {
    const onhandle=(name)=>{
      setpost(name)
    }
    return (
      <>
      <div>
        
      
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a xlinkHref="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4 para2">Simple header</span>
        </a>
  
        <ul className=" text">
          <li className=" text " onClick={()=>{onhandle("home")}}><a xlinkHref="#" className={`nav-link  `}>Home</a></li>
          <li className=" text" onClick={()=>{onhandle("pricing")}}><a xlinkHref="#"  className={`nav-link `}>Pricing</a></li>
          <li className=" text" onClick={()=>{onhandle("features")}}><a xlinkHref="#"  className={`nav-link `}>Features</a></li>
          <li className=" text" onClick={()=>{onhandle("faqs")}}><a xlinkHref="#" className={`nav-link`}>FAQs</a></li>
          <li className=" text" onClick={()=>{onhandle("about")}}><a xlinkHref="#" className={`nav-link `}>About</a></li>
        </ul>
      </header>
      </div>
  
      </>
    )
  }
  
  
  export default Navbar