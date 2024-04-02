import Logo from "./Logo";
import NavDropDown from "./NavDropDown";

const Navbar = ({ lang }) => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo lang={lang} />
        <NavDropDown lang={lang} />
      </div>
    </nav>
  );
};

export default Navbar;
