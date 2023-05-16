import Navbar from "../Header/Navbar";

interface propType {
    children: React.ReactNode;
}

const Layout = ({ children }: propType) => {
  return (
    <div className="layout_main">
        <div className="navbar">
            <Navbar />
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout
