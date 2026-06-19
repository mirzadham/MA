function TrainingCard({ training, onClick }) {
  const { title, image, category } = training;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(training);
    }
  };

  return (
    <article
      className="card-glassmorphic"
      onClick={() => onClick(training)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Explore ${title} training`}
    >
      <div className="card-image-3d">
        <img src={image} alt={`${title} training visualization`} />
        <div className="card-image-overlay"></div>
        <div className="card-glow-accent"></div>
      </div>

      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
        <div className="card-cta-link">
          <span>More Details</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </article>
  );
}

export default TrainingCard;
