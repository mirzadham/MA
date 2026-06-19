import { useEffect, useState } from 'react';
import '../styles/modal.css';

function Modal({ training, onClose }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    setCurrentPageIndex(0);
  }, [training]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!training) return null;

  const pages = training.pages || [1];
  const totalPages = pages.length;
  const visiblePages = pages.slice(currentPageIndex, currentPageIndex + 2);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const getPageImage = (pageNum) => {
    if (training.images && training.images[pageNum - 1]) {
      return training.images[pageNum - 1];
    }
    return training.image;
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        <div className={`modal-images ${totalPages > 1 ? 'multi-page' : ''}`}>
          {totalPages > 1 ? (
            <>
              <button
                type="button"
                className="page-nav prev"
                onClick={handlePrev}
                disabled={currentPageIndex === 0}
                aria-label="Previous page"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="pages-container">
                {visiblePages.map((pageNum) => (
                  <img key={pageNum} src={getPageImage(pageNum)} alt={`${training.title} - Page ${pageNum}`} />
                ))}
              </div>
              <button
                type="button"
                className="page-nav next"
                onClick={handleNext}
                disabled={currentPageIndex === totalPages - 1}
                aria-label="Next page"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          ) : (
            <img src={training.image} alt={training.title} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
