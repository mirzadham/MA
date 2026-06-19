import { useEffect, useState } from 'react';
import '../styles/modal.css';

function Modal({ training, onClose }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pages = training ? training.pages || [1] : [1];
  const totalPages = pages.length;
  const pagesPerSpread = isMobile ? 1 : 2;

  // Reset page index when a new training is opened or view mode changes
  useEffect(() => {
    setCurrentPageIndex(0);
  }, [training, isMobile]);

  const handlePrev = () => {
    setCurrentPageIndex((prev) => Math.max(prev - pagesPerSpread, 0));
  };

  const handleNext = () => {
    setCurrentPageIndex((prev) => {
      const nextIndex = prev + pagesPerSpread;
      return nextIndex < totalPages ? nextIndex : prev;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentPageIndex > 0) handlePrev();
      } else if (e.key === 'ArrowRight') {
        if (currentPageIndex + pagesPerSpread < totalPages) handleNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, totalPages, currentPageIndex]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!training) return null;

  const currentSpreadPages = pages.slice(currentPageIndex, currentPageIndex + pagesPerSpread);

  const getPageImage = (pageNum) => {
    if (training.images && training.images[pageNum - 1]) {
      return training.images[pageNum - 1];
    }
    return training.image;
  };

  const onPrevClick = (e) => {
    e.stopPropagation();
    handlePrev();
  };

  const onNextClick = (e) => {
    e.stopPropagation();
    handleNext();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        <div className={`modal-images ${totalPages > 1 ? 'multi-page' : ''}`}>
          {totalPages > pagesPerSpread && (
            <button
              className="page-nav prev"
              onClick={onPrevClick}
              disabled={currentPageIndex === 0}
              aria-label="Previous page"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}
          <div className={`pages-container spread-${currentSpreadPages.length}`}>
            {currentSpreadPages.map((pageNum, idx) => (
              <img
                key={pageNum}
                src={getPageImage(pageNum)}
                alt={`${training.title} - Page ${currentPageIndex + idx + 1}`}
              />
            ))}
          </div>
          {totalPages > pagesPerSpread && (
            <button
              className="page-nav next"
              onClick={onNextClick}
              disabled={currentPageIndex + pagesPerSpread >= totalPages}
              aria-label="Next page"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
