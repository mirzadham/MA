function TrainingCard({ training, onClick }) {
  return (
    <div className="card" onClick={() => onClick(training)}>
      <img src={training.image} alt={training.title} />
      <div className="card-title">{training.title}</div>
    </div>
  );
}

export default TrainingCard;
