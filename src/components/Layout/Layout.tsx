import Navbar from "../Header/Navbar";
import NavMenu from "../Nav";

interface propType {
    children: React.ReactNode;
}

const Layout = ({ children }: propType) => {
  return (
    <div className="layout_main">
        <div className="navbar">
            <Navbar />
            <NavMenu />
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout
