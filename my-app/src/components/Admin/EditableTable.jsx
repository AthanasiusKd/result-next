import { useState } from "react";

function EditableTable({ data, updateData, classTitle, arm }) {
  const [editRowId, setEditRowId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(id, text) {
    setEditRowId(id);
    setEditedName(text);
  }

  function handleSaveClick(id) {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, text: editedName } : item
    );
    updateData(updatedData);
    setEditRowId(null);
  }

  function handleInputChange(e) {
    setEditedName(e.target.value);
  }

  function handleEditing() {
    setIsEditing(!isEditing);
  }

  return (
    <div>
      <div className="commentbtn-div">
        <button className="comment-btn" onClick={handleEditing}>
          {isEditing ? "Save Changes" : "Add/Edit Names"}
        </button>
      </div>
      <div className="printable" style={{maxWidth: '900px'}}>
        <table className="comment-table">
          <thead>
            <tr>
              {isEditing ? <th style={{width: '10%'}}>Actions</th> : null}
              <th style={{width: '10%'}}>S/N</th>
              <th style={{width : isEditing ? "55%" : "65%" }}>Name</th>
              <th style={{width: '15%'}}>Class</th>
              <th style={{width: '10%'}}>Arm</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {isEditing ? (
                  <td>
                    {editRowId === item.id ? (
                      <button
                        className="edit-btn"
                        onClick={() => handleSaveClick(item.id)}
                      >
                        Update
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
                <td>{classTitle}</td>
                <td>{arm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditableTable;
