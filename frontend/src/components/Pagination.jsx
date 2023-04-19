import React from 'react'

export const Pagination = ({currentPage, setCurrentPage, studentsPerPage, totalStudents }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            <ul className='pagination-list'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button className={`pagination-link ${currentPage === number ? 'is-current' : ''}`} 
                        onClick={() => setCurrentPage(number)}>
                            {number}
                        </button>
                    </li>
                    ))}
            </ul>
        </nav>
    )
}

