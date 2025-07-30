import React from 'react';

function Pagination({ currentPage, onPageChange, totalPages }) {
  const goToPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#000', 
        padding: '20px 0',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          style={{
            fontSize: '20px',
            padding: '6px 12px',
            borderRadius: '6px',
            background: '#333',
            color: 'white',
            border: 'none',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.4 : 1,
          }}
        >
          ◀
        </button>

        <span style={{ fontWeight: 'bold' }}>Page {currentPage}</span>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          style={{
            fontSize: '20px',
            padding: '6px 12px',
            borderRadius: '6px',
            background: '#333',
            color: 'white',
            border: 'none',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? 0.4 : 1,
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Pagination;
