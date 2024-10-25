import { ChangeEvent, useState } from "react";

interface Props {
  updateData: (newData: any) => void,
  data: {id: number, text: string}[],
  classTitle: string,
  arm: string
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
    const updatedData = props.data.map((item) =>
      item.id === id ? { ...item, text: editedName } : item
    );
    props.updateData(updatedData);
    setEditRowId(0);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
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
            {props.data.map((item) => (
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
                <td>{props.classTitle}</td>
                <td>{props.arm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditableTable;
