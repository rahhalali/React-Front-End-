import React from "react";

const Pagination = ({ itemsPerPage, totalPosts, paginate }) => {
  const PageNumbers = [];
  console.log("itemsPerpage", itemsPerPage);
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    PageNumbers.push(i);
  }
  console.log("PageNumber", PageNumbers);
  return (
    <nav>
      <ul className="pagination">
        {PageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
