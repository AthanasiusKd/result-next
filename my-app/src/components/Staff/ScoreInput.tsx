import React, { ChangeEvent, useState } from "react";
import NameList from "@/db/NameList";

function ScoreInput() {
  const initialRowState = {
    studentName: "",
    project: "",
    test1: "",
    test2: "",
    exam: "",
  };

  // Generate a fixed array of 50 rows
  const [rows, setRows] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      ...initialRowState,
      id: i + 1, // IDs 1 to 50
      studentName: NameList[i].text,
    }))
  );

  const rowsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  function handleSubmit(id: number) {
    const rowData = rows.find((row) => row.id === id);
    console.log("Form Data for row", id, rowData);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, id: number) {
    const { name, value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [name]: value } : row))
    );
  }

  // Calculate the rows to display for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  // Go to next page
  function nextPage() {
    if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  // Go to previous page
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <div className="overall-div">
      <div className="table-container">
        <table className="score-table">
          <thead>
            <tr>
              <th style={{width: '3%'}}>S/N</th>
              <th style={{width: '47%'}}>Student Name</th>
              <th style={{width: '10%'}}>Project</th>
              <th style={{width: '10%'}}>1st Test</th>
              <th style={{width: '10%'}}>2nd Test</th>
              <th style={{width: '10%'}}>Exam</th>
              <th style={{width: '8%'}}></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{NameList[row.id - 1].text}</td>
                <td>
                  <input
                    type="number"
                    name="project"
                    value={row.project}
                    onChange={(e) => handleInputChange(e, row.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="test1"
                    value={row.test1}
                    onChange={(e) => handleInputChange(e, row.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="test2"
                    value={row.test2}
                    onChange={(e) => handleInputChange(e, row.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="exam"
                    value={row.exam}
                    onChange={(e) => handleInputChange(e, row.id)}
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleSubmit(row.id)}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(rows.length / rowsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreInput;
