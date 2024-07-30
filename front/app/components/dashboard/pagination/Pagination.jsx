import styles from "./pagination.module.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={styles.button}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;