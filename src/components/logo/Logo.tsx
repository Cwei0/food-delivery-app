import logoImage from "../../assets/delivery icon.png"
export const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <div className="image-container">
          <img src={logoImage} alt="logo-image" />
        </div>
        <h2>F<span>OO</span>D</h2>
      </div>
    </>
  )
}
