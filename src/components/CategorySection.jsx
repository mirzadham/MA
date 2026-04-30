import TrainingCard from './TrainingCard';

function CategorySection({ category, trainings, onCardClick }) {
  return (
    <section className="category-section">
      <h2 className="category-title">--- {category} ---</h2>
      <div className="trainings-grid">
        {trainings.map(training => (
          <TrainingCard
            key={training.id}
            training={training}
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
