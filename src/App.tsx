import { Footer, Hero, Meals, Navbar, Review } from "./layouts"

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Meals/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App