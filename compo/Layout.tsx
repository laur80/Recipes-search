import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;