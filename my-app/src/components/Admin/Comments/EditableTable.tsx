import { ChangeEvent, useRef, useState } from "react";

interface Props {
  updateData: (newData: any) => void,
  data: {id: number, text: string}[]
}

function EditableTable(props: Props) {
  const [editRowId, setEditRowId] = useState(0);
  const [editedName, setEditedName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(id: number, text: string) {
    setEditRowId(id);
    setEditedName(text);
  }

  function handleSaveClick(id: number) {
    const updatedData = props.data.map((item: { id: number; text: string }) =>
      item.id === id ? { ...item, text: editedName } : item
    );
    props.updateData(updatedData); // Call the parent's update function
    setEditRowId(0); // Exit edit mode
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setEditedName(e.target.value);
  }

  function handleEditing() {
    setIsEditing(!isEditing);
  }

  const printRef = useRef<HTMLDivElement>(null);
  function handlePrint() {
    window.print();
  }

  return (
    <div>
      <div className="commentbtn-div">
        <button className="comment-btn" onClick={handleEditing}>
          {isEditing ? "Save Changes" : "Add/Edit Comments"}
        </button>
        {isEditing ? null : (
          <button className="comment-btn" onClick={handlePrint}>
            Print Comment List
          </button>
        )}
      </div>
      <div ref={printRef} className="printable">
        <table className="comment-table">
          <thead>
            <tr>
              {isEditing ? <th className="col-small">Actions</th> : null}
              <th className="col-small">ID</th>
              <th style={{ width: isEditing ? "80%" : "90%" }}>Comment</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item: { id: number; text: string }) => (
              <tr key={item.id}>
                {isEditing ? (
                  <td>
                    {editRowId === item.id ? (
                      <button
                        className="edit-btn"
                        onClick={() => handleSaveClick(item.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="edit-btn"
                        onClick={() => handleEditClick(item.id, item.text)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                ) : null}
                <td>{item.id}</td>
                <td>
                  {editRowId === item.id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={handleInputChange}
                      className="comment-input"
                    />
                  ) : (
                    item.text
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditableTable;
