import { useState, useMemo } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import Modal from './components/Modal';
import trainings from './data/trainings';

function App() {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <Header />
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
