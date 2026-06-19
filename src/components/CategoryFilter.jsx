import { useEffect, useState } from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  return (
    <div className="category-filter">
      {!isMobile ? (
        <div className="filter-tabs">
          <button
            className={`filter-tab ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : (
        <div className="filter-dropdown-wrapper">
          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">All Programs</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
