import { useNavigate } from 'react-router-dom';
import card1 from '../assets/Card1.png';
import card2 from '../assets/Card 3.png';
import card3 from '../assets/Card 5.png';
import plus from '../assets/plus.png';
import Form from './Form';
import { useState } from 'react';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const cardData = [
    { id: 1, image: card1 },
    { id: 2, image: card2 },
    { id: 3, image: card3 },
  ];

  const handleCardClick = (cardId: number) => {
    navigate(`/card/${cardId}`);
  };

  return (
    <>
      <div className='grid grid-flow-col gap-10 justify-between'>
        <p className='agbalumo-regular font-bold text-5xl'>Juno</p>
        <button 
          className='bg-gray-300 w-15 h-15 rounded-full flex items-center justify-center p-2' 
          onClick={() => setShowForm(true)}
        >
          <img src={plus} alt="" className='h-5 w-5' />
        </button>
      </div>
      {showForm && <Form onClose={() => setShowForm(false)} />}
      <div className='card-section'>
        <div className='mt-20 grid-row-4 grid-flow-col grid gap-7'>
          {cardData.map(card => (
            <img 
              key={card.id} 
              src={card.image} 
              alt={`card ${card.id}`} 
              className='h-120 shadow-xl rounded-4xl cursor-pointer hover:opacity-90 transition-opacity' 
              onClick={() => handleCardClick(card.id)} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
