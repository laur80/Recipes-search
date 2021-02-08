
import Link from 'next/link'


const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link href="/" ><a className="navbar-brand" >Recipes search</a></Link>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href="/">
          <a className="nav-link active" aria-current="page" >Recipes search</a>
          </Link>
          <a className="nav-link" href="#">Features</a>
        </div>
      </div> */}
    </div>
  </nav>
  );
}

export default Navbar;

