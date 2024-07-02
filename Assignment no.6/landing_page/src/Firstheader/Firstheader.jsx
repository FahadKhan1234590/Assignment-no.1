const Firstheader = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{paddingTop : "0%"}}>
    <div className="container-fluid" style={{backgroundColor : "#00306E",color: "white"}}>
      <i className="fa-solid fa-phone text-white"></i>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">(+1) 3344 999 999</a>
          </li>
          
            <a className="nav-link text-white" href="#">  <i className="fa-regular fa-envelope "></i> info@reactheme.com</a>
        </ul>
    
        <a className="nav-link"><i className="fa-brands fa-facebook-f text-white"></i></a>
        <a className="nav-link ms-3"><i className="fa-brands fa-twitter text-white"></i></a>
        <a className="nav-link ms-3 me-3"><i className="fa-brands fa-linkedin-in text-white"></i></a>
      
      </div>
    </div>
  </nav>
  );
}

export default Firstheader;