import { Button, Logo } from "../../components";
import { HiOutlineSearch } from "react-icons/hi";
import { FaShoppingBasket } from "react-icons/fa";
import { useMediaQuery } from "../../hooks";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

export const Navbar = () => {
  const links: Array<string> = ["Home", "Menu", "Service", "Contact"];
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Left side */}
            <Logo />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className="links-container">
                <div className="links-wrapper">
                  {links.map((link, i) => (
                    <p key={i} className="links">
                      {link}
                    </p>
                  ))}
                </div>
                <div className="links-aux">
                  <HiOutlineSearch />
                  <FaShoppingBasket />
                  <Button>Sign In</Button>
                </div>
              </div>
            ) : (
              <Button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <HiBars3 />
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
      </nav>
    </>
  );
};
