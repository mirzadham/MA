function TrainingCard({ training, onClick }) {
  return (
    <div className="card" onClick={() => onClick(training)}>
      <div className="card-image-wrapper">
        <img src={training.image} alt={training.title} />
        <div className="card-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{training.title}</h3>
      </div>
    </div>
  );
}

export default TrainingCard;
