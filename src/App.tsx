import { Footer, Hero, Meals, Navbar, Review } from "./layouts"

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <Navbar/>
        <Hero/>
        <Meals/>
        <Review/>
        <Footer/>
      </div>
    </div>
  )
}

export default App