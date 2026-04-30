import { useEffect, useState } from 'react';
import '../styles/modal.css';

function Modal({ training, onClose }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

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
  const currentPage = pages[currentPageIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const getPageImage = (pageNum) => {
    if (totalPages === 1) return training.image;
    const baseName = training.image.replace(/-1\.png$/, '');
    return `${baseName}-${pageNum}.png`;
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        <div className={`modal-images ${totalPages > 1 ? 'multi-page' : ''}`}>
          {totalPages > 1 ? (
            <>
              <button className="page-nav prev" onClick={handlePrev} disabled={currentPageIndex === 0}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="pages-container">
                <img src={getPageImage(pages[0])} alt={`${training.title} - Page 1`} />
                {totalPages > 1 && (
                  <img src={getPageImage(pages[1])} alt={`${training.title} - Page 2`} />
                )}
              </div>
              <button className="page-nav next" onClick={handleNext} disabled={currentPageIndex === totalPages - 1}>
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
