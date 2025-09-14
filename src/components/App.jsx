import { useState, useEffect } from "react"
import "../styles/App.css"
import Banner from "./Banner"
import BoutiqueProduits from "./BoutiqueProduits"
import Panier from "./Panier"
import Footer from "./Footer"
import MentionsLegales from "./MentionsLegales"

function App() {
  const [legal, setLegal] = useState(false);
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  return legal ? (<div>
    <Banner />
    <MentionsLegales legal={legal} setLegal={setLegal} />
    <Footer legal={legal} setLegal={setLegal} />
  </div >

  ) : (<div>
    <Banner />
    < Panier cart={cart} setCart={setCart} />
    <BoutiqueProduits cart={cart} setCart={setCart} />
    <Footer setLegal={setLegal} />
  </div >)
}
export default App