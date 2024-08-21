import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import AddWordForm from './components/AddWordForm/AddWordForm';
import WordTable from './components/WordTable/WordTable';
import ToggleTableButton from './components/ToggleTableButton/ToggleTableButton';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import './components/WordCard/WordCard.css';
import './components/WordCarousel/WordCarousel.css';

const Home = ({ words, addWord, updateWord, deleteWord, isTableVisible, toggleTableVisibility }) => (
  <div>
    <AddWordForm addWord={addWord} />
    <ToggleTableButton isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />
    {isTableVisible && (
      <WordTable words={words} updateWord={updateWord} deleteWord={deleteWord} />
    )}
  </div>
);

const Game = ({ words }) => {
  const [learnedWords, setLearnedWords] = useState([]);

  const handleWordLearned = (wordId) => {
    if (!learnedWords.includes(wordId)) {
      setLearnedWords([...learnedWords, wordId]);
    }
  };

  return (
    <div>
      <WordCarousel words={words} onWordLearned={handleWordLearned} learnedWords={learnedWords} />
      
    </div>
  );
};

const App = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Hello', transcription: 'həˈlō', translation: 'Привет', theme: 'Базовое' },
    { id: 2, word: 'Goodbye', transcription: 'gʊdˈbaɪ', translation: 'До свидания', theme: 'Базовое' },
    { id: 2, word: 'Programmer', transcription: 'ˈprəʊgræmə', translation: 'Программистка', theme: 'Профильное' }
  ]);
  const [isTableVisible, setTableVisible] = useState(false);

  const addWord = (newWord) => {
    newWord.id = words.length ? words[words.length - 1].id + 1 : 1;
    setWords([...words, newWord]);
  };

  const updateWord = (updatedWord) => {
    setWords(words.map((word) => (word.id === updatedWord.id ? updatedWord : word)));
  };

  const deleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <Router>
      <div className="App">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={
              <Home
                words={words}
                addWord={addWord}
                updateWord={updateWord}
                deleteWord={deleteWord}
                isTableVisible={isTableVisible}
                toggleTableVisibility={toggleTableVisibility}
              />
            } />
            <Route path="/game" element={<Game words={words} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


