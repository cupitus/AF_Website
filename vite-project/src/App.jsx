
import { useState } from 'react'
import { Background } from './Components/Background/Background/Background';

export default function App() {
let herodata = [
  {text1 : "Dive into the world of", text2 : "American Football"},
  {text1 : "Indulge", text2 : "your passion for the game"},
  {text1 : "Get the latest Equipments", text2 : "Give in to your desires"},
]

const[heroCount, setheroCount] = useState(2);
const[playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount = {heroCount} />
    </div>
  )
}
