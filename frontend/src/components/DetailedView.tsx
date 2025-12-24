import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';

function DetailedView() {
  const { cardId } = useParams<{ cardId: string }>();
  const navigate = useNavigate();

  return (
    <div className="detailed-view p-6 bg-white rounded-xl shadow-2xl max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-4">Detailed View - Card {cardId}</h2>
      <p className="text-gray-700 mb-6">
        This is a detailed view of the selected item. Here you can provide more information and context about the item.
      </p>
      <div className="image-container mb-6">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Detailed View"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
      <button className="bg-black text-white rounded-md px-4 py-2" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
export default DetailedView;