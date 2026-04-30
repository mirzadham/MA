import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import Modal from './components/Modal';
import trainings from './data/trainings';

function App() {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const groupedTrainings = useMemo(() => {
    return trainings.reduce((acc, training) => {
      if (!acc[training.category]) {
        acc[training.category] = [];
      }
      acc[training.category].push(training);
      return acc;
    }, {});
  }, []);

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <main>
        {Object.entries(groupedTrainings).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            trainings={items}
            onCardClick={openModal}
          />
        ))}
      </main>
      <Modal training={selectedTraining} onClose={closeModal} />
    </div>
  );
}

export default App;
