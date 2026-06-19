import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import TrainingCard from './components/TrainingCard';
import CategoryFilter from './components/CategoryFilter';
import Modal from './components/Modal';
import trainings from './data/trainings';

function App() {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (training) => {
    setScrollPosition(window.scrollY);
    setSelectedTraining(training);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTraining(null);
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
  };

  const uniqueCategories = useMemo(() => {
    return [...new Set(trainings.map(t => t.category))];
  }, []);

  const filteredTrainings = useMemo(() => {
    if (selectedCategory === 'All') return trainings;
    return trainings.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <main>
        <h1 className="sr-only">MIMOS Academy Training Showcase</h1>
        <div className="filter-container">
          <CategoryFilter
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="trainings-consolidated-grid">
          {filteredTrainings.map(training => (
            <TrainingCard
              key={training.id}
              training={training}
              onClick={openModal}
            />
          ))}
        </div>
      </main>
      <Modal training={selectedTraining} onClose={closeModal} />
    </div>
  );
}

export default App;
