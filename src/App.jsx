import { MainCard } from "./components/card/main-card";
import Card_one from "./assets/card_one.png"
import Card_two from "./assets/card-two.png"
import Card_three from "./assets/card-three.png"
import Card_four from "./assets/card-four.png"
import Card_five from "./assets/card-five.png"
import Card_six from "./assets/card-six.png"
import Card_seven from "./assets/card-seven.png"
import Card_nine from "./assets/card-nine.png"
import Card_ten from "./assets/card-ten.png"
import "./index.css"

function App() {

  return (
    <>
    <div className="container">
      <MainCard img = {Card_one} title = {"1984"} />
      <MainCard img = {Card_two} title = {"Rich dad poor dad"} />
      <MainCard img = {Card_three} title = {"Код 8"} />
      <MainCard img = {Card_four} title = {"Даниел КИЗ"} />
      <MainCard img = {Card_five} title = {"Бепарволикнинг но..."} />

    </div>
    <div className="container">
      <MainCard img = {Card_six} title = {"1984"} />
      <MainCard img = {Card_seven} title = {"Rich dad poor dad"} />
      <MainCard img = {Card_five} title = {"Код 8"} />
      <MainCard img = {Card_nine} title = {"Даниел КИЗ"} />
      <MainCard img = {Card_ten} title = {"Бепарволикнинг но..."} />

    </div>
    </>
  )
}

export default App