import logoImage from "../../assets/delivery icon.png";

/**
 * Functional component representing a logo with text for a food delivery app.
 *
 * @component
 * @param {object} props - The props for the Logo component.
 * @param {string} props.ariaLabel - The ARIA label for the Logo, which describes its purpose.
 * @example
 * // Example usage of Logo component
 * <Logo ariaLabel="Home" />
 */
type Props = {
  ariaLabel: string;
};
export const Logo = ({ ariaLabel }: Props) => {
  return (
    <>
      <div className="logo-container">
        <div className="image-container">
          {/* Logo image */}
          <img src={logoImage} alt="logo-image" />
        </div>
        {/* Logo text with ARIA label */}
        <h2 aria-label={ariaLabel}>
          F<span>OO</span>D
        </h2>
      </div>
    </>
  );
};
