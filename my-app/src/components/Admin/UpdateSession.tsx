import { ChangeEvent, FormEvent, useState } from "react";

function UpdateSession() {
  const [formData, setFormData] = useState({
    startYear: "",
    endYear: "",
  });

  function handleInput(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="result-body">
        <div>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "600px" }}
            className="card check-result"
          >
            <p className="check-head" style={{ marginBottom: "20px" }}>
              This <strong>must</strong> be done at the start of each{" "}
              <strong>new session</strong>
            </p>
            <div className="check-div">
              <label
                className="form-label result-label overall"
                htmlFor="startYear"
              >
                Year Session Starts
              </label>
              <input
                className="form-control"
                type="number"
                id="startYear"
                placeholder="YYYY"
                onChange={handleInput}
                value={formData.startYear}
              />
            </div>
            <div className="check-div">
              <label
                className="form-label result-label overall"
                htmlFor="endYear"
              >
                Year Session Ends
              </label>
              <input
                className="form-control"
                type="number"
                id="endYear"
                placeholder="YYYY"
                onChange={handleInput}
                value={formData.endYear}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn login-btn check-result" type="submit">
                Update
              </button>
            </div>
          </form>
          <button>View/Edit</button>
        </div>
      </div>
    </>
  );
}

export default UpdateSession;
