import './styles.css';
// import styles from './App.module.css';
import slot_cherry from "./assets/slot-cherry.png";
import slot_lemon from "./assets/slot-lemon.png";
import slot_melon from "./assets/slot-melon.png";
import slot_prune from "./assets/slot-prune.png";
import slot_seven from "./assets/slot-seven.png";

const imgs = [slot_cherry, slot_lemon, slot_melon, slot_prune, slot_seven]

function getRandomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleRefresh = (): void => {
  window.location.reload();
};

const getSlots = (numberOfSlots: number) => {
  let slots: number[] = [];
  for (let index = 0; index < numberOfSlots; index++) {
    slots.push(Math.floor(Math.random() * 5))
  }
  return slots
}

interface SlotMachineProps {
  slots: number
}
const SlotMachine = ({ slots }: SlotMachineProps) => {
  let slotsCount: number[] = getSlots(slots);
  let winning: boolean = slotsCount.every((slot => slot === slotsCount[0]))
  return (
    <>
      <div className='slotMachineContainer'>
        <div className='slotMachineSubContainer'>
          {slotsCount.map((_slot, index) =>
            <Slot key={index} value={getRandomIntBetween(0, 4)}></Slot>
          )}
        </div>
        {winning ? <p className='linearWipe'>Je hebt gewonnen</p> : <p className='linearWipe'>Je hebt verloren</p>}
      </div>
    </>
  )
}

interface SlotProps {
  value: number
}
const Slot = ({ value }: SlotProps) => {
  return (
    <>
      <img className='slot_Osmt' style={{ width: 64, height: 64 }} src={imgs[value]} />
    </>
  )
}

const App = () => {
  return (
    <div>
      <h1>Labo 1: SlotMachine</h1>
      <SlotMachine slots={3}></SlotMachine>
      <SlotMachine slots={4}></SlotMachine>
      <SlotMachine slots={5}></SlotMachine>
      <button onClick={handleRefresh}>Refresh Page</button>
    </div>
  );
}

export default App;