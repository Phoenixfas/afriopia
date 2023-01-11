import Footer from "../Footer";
import NavBar from "../Navbar";

export default function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
