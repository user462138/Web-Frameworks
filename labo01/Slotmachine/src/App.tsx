import React from "react";
import slot_cherry from "./assets/slot-cherry.png";
import slot_lemon from "./assets/slot-lemon.png";
import slot_melon from "./assets/slot-melon.png";
import slot_prune from "./assets/slot-prune.png";
import slot_seven from "./assets/slot-seven.png";

function getRandomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Slots {
  number: number
  img: string
}



const App = () => {
  const imgs = [slot_cherry, slot_lemon, slot_melon, slot_prune, slot_seven]
  
  // const slot1: number = getRandomIntBetween(0, 4)
  // const slot2: number = getRandomIntBetween(0, 4)
  // const slot3: number = getRandomIntBetween(0, 4)

  const slots: Slots[] = [
    {
      number: 0,
      img: imgs[getRandomIntBetween(0, 4)]
    },
    {
      number: 1,
      img: imgs[getRandomIntBetween(0, 4)]
    },
    {
      number: 2,
      img: imgs[getRandomIntBetween(0, 4)]
    },
    {
      number: 3,
      img: imgs[getRandomIntBetween(0, 4)]
    },    {
      number: 4,
      img: imgs[getRandomIntBetween(0, 4)]
    }
  ]
  let luckyText: JSX.Element;
  if (slots[0] === slots[1] && slots[1] == slots[2] && slots[2] == slots[3]  && slots[3] == slots[4]) {
    luckyText = <p>Je hebt gewonnen</p>
  } else {
    luckyText = <p>Je hebt verloren</p>
  }
  const handleRefresh = (): void => {
    window.location.reload();
  };
  return (
    <div>
      <h1>Labo 1: Slots met map</h1>
      {
        imgs.map((img, index) => <React.Fragment key={index}>
          <img style={{ width: 64, height: 64 }} src={img} />
        </React.Fragment>)
      }
      {luckyText}
      {/* <img style={{ width: 64, height: 64 }} src={imgs[slot1]} />
      <img style={{ width: 64, height: 64 }} src={imgs[slot2]} />
      <img style={{ width: 64, height: 64 }} src={imgs[slot3]} /> */}
      {
        slots.map((slot) => <React.Fragment key={slot.number}>
        <img style={{ width: 64, height: 64 }} src={slot.img} />
      </React.Fragment>)
      }
      <br />
      <button onClick={handleRefresh}>Refresh Page</button>
    </div>
  );
}

export default App;