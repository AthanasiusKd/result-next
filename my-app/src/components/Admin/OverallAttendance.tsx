import { useState, ChangeEvent, FormEvent } from "react";

function OverallAttendance() {
  const [formData, setFormData] = useState({
    session: '',
    term: '',
    attendance: "",
    begins: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
          <form onSubmit={handleSubmit} className="card check-result">
            <p className="check-head" style={{ marginBottom: "20px" }}>
              This page <strong>must</strong> be updated every{" "}
              <strong>term</strong>
            </p>
            <div className="check-div">
              <label className="form-label result-label overall" htmlFor="session">
                Session
              </label>
              <select
                className="form-select"
                id="session"
                onChange={handleInput}
                value={formData.session}
              >
                <option value="">CHOOSE SESSION</option>
                <option value="2024">2024/2025</option>
              </select>
            </div>
            <div className="check-div">
              <label className="form-label result-label overall" htmlFor="term">
                Term
              </label>
              <select
                className="form-select"
                id="term"
                onChange={handleInput}
                value={formData.term}
              >
                <option value="">CHOOSE TERM</option>
                <option value="1st">FIRST TERM</option>
                <option value="2nd">SECOND TERM</option>
                <option value="3rd">THIRD TERM</option>
              </select>
            </div>
            <div className="check-div">
              <label className="form-label result-label overall" htmlFor="attendance">
                total attendance
              </label>
              <input
                className="form-control"
                type="number"
                id="attendance"
                onChange={handleInput}
                value={formData.attendance}
              />
            </div>
            <div className="check-div">
              <label className="form-label result-label overall" htmlFor="begins">
                Next term begins
              </label>
              <input
                className="form-control"
                type="date"
                id="begins"
            
                onChange={handleInput}
                value={formData.begins}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn login-btn check-result" type="submit">
                enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OverallAttendance;
