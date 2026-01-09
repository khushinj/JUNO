import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import card1 from '../assets/Card1.png';
import card2 from '../assets/Card 3.png';
import card3 from '../assets/Card 5.png';
import card4 from '../assets/Card 6.png';

const cardData = [
  { id: 1, image: card1 },
  { id: 2, image: card2 },
  { id: 3, image: card3 },
  { id: 4, image: card4 },
];

function DetailedView() {
  const { cardId } = useParams<{ cardId: string }>();
  const navigate = useNavigate();

  const card = cardData.find(c => c.id === parseInt(cardId!));

  return (
    <div className="detailed-view p-6 bg-white rounded-xl shadow-2xl mt-10">
      {/* <h2 className="text-3xl font-semibold mb-4">Detailed View - Card {cardId}</h2> */}
      {/* <p className="text-gray-700 mb-6">
        This is a detailed view of the selected item. Here you can provide more information and context about the item.
      </p> */}
      <div className="grid grid-cols-3 gap-5">
        <div className="image-container mb-6 mt-7">
          <img
            src={card?.image}
            alt="Detailed View"
            className="shadow-xl rounded-4xl h-120"
          />
        </div>

        <div className="hahmlet text-6xl col-span-2">
          This month I'm focusing on

          <div className="para livvic-regular text-2xl mt-8">
            This month I’m focusing on 
            This month I’m focusing on 
            This month I’m focusing on 
            This month I’m focusing on 
            This month I’m focusing on
          </div>
        </div>
      </div>
      <button className="bg-black text-white rounded-md px-4 py-2" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
export default DetailedView;