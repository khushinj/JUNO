import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailedView from './components/DetailedView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:cardId" element={<DetailedView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
