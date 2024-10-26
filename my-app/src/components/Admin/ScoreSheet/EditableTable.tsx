import { useRef } from "react";

interface Props {
  classTitle: string;
  arm: string;
  data: { id: number; text: string }[];
}

function EditableTable(props: Props) {
  const printRef = useRef<HTMLDivElement>(null);
  function handlePrint() {
    window.print();
  }
  return (
    <div>
      <div className="commentbtn-div">
        <button className="comment-btn" onClick={handlePrint}>
          Print Score Sheet
        </button>
      </div>
      <div ref={printRef} className="printable">
        <div className="print-only">
          <h2>{props.classTitle}</h2>
          <h2>{props.arm}</h2>
          <p>
            Subject: <input type="text"></input>
          </p>
        </div>
        <table className="comment-table">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>S/N</th>
              <th style={{ width: "43%" }}>Name</th>
              <th style={{ width: "13%" }}>Project</th>
              <th style={{ width: "13%" }}>1st Test</th>
              <th style={{ width: "13%" }}>2nd Test</th>
              <th style={{ width: "13%" }}>Exam</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.text}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditableTable;
