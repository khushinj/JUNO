import './index.css'
import './App.css'
import card1 from './assets/Card1.png';
import card2 from './assets/Card 3.png';
import card3 from './assets/Card 5.png';
import plus from './assets/plus.png';

function App() {
  return (
    <>
      <div className='grid grid-flow-col gap-10 justify-between'>
        <p className='agbalumo-regular font-bold text-5xl'>Juno</p>
        <button className='bg-gray-300 w-15 h-15 rounded-full flex items-center justify-center p-2'>
          <img src={plus} alt="" className='h-5 w-5' />
        </button>
      </div>
      <div className='card-section'>
        <div className='mt-20 grid-row-4 grid-flow-col grid gap-7'>
          <img src={card1} alt="card 1" className='h-120' />
          <img src={card2} alt="card 1" className='h-120' />
          <img src={card3} alt="card 1" className='h-120' />
        </div>
      </div>
    </>
  )
}

export default App
