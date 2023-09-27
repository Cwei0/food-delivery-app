import { Button, Logo } from "../../components";
import { FaShoppingBasket } from "react-icons/fa";
import { useMediaQuery } from "../../hooks";
import { HiBars3 } from "react-icons/hi2";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

/**
 * Functional component representing a navigation bar for a food delivery app.
 * This Navbar can be responsive, showing different content based on the screen size.
 *
 * @component
 * @example
 * // Example usage of Navbar component
 * <Navbar />
 */
export const Navbar = () => {
  // Array of navigation links
  const links: Array<string> = ["Home", "Menu", "Service", "Contact"];

  // Hook to check if the screen width is above medium screens
  const isAboveMediumScreens = useMediaQuery("(min-width: 1040px)");

  // State to control mobile menu visibility
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Logo component with aria-label */}
            <Logo ariaLabel="Home" />

            {isAboveMediumScreens ? (
              // Rendered content for medium and larger screens
              <div className="links-container">
                <div className="links-wrapper">
                  {/* Mapping and rendering navigation links */}
                  {links.map((link, i) => (
                    <p key={i} className="links">
                      {link}
                    </p>
                  ))}
                </div>
                <div className="links-aux">
                  {/* Shopping basket icon and Sign In button */}
                  <FaShoppingBasket />
                  <Button>Sign In</Button>
                </div>
              </div>
            ) : (
              // Rendered content for small screens (mobile menu)
              <>
                <button
                  className="nav-button"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  // Toggle aria-label based on menu state
                  aria-label={isMenuToggled ? "Close menu" : "Open menu"}
                >
                  <HiBars3 />
                </button>

                {isMenuToggled && (
                  <div className="mobile-menu">
                    <div className="icon-container">
                      <FaShoppingBasket />
                      <button
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        aria-label="Close Menu" // ARIA label for close button
                      >
                        <XMarkIcon className="x-icon" />
                      </button>
                    </div>
                    <div className="menu-container" role="menu">
                      {/* Mapping and rendering menu items */}
                      {links.map((link, i) => (
                        <p key={i} className="menu" role="menuitem">
                          {link}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
