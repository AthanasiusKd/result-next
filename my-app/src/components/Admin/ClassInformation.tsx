import { useState, ChangeEvent, FormEvent } from "react";

function ClassInformation() {
  const [formData, setFormData] = useState({
    session: "",
    term: "",
    class: "",
    arm: "",
    teacher: "",
    fees: "",
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
            <p className="check-head" style={{marginBottom: "20px"}}>
              This page <strong>must</strong> be updated every <strong>term</strong>
            </p>
            <div className="check-div">
              <label className="form-label info-label" htmlFor="session">
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
              <label className="form-label info-label" htmlFor="term">
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
              <label className="form-label info-label" htmlFor="class">
                Class
              </label>
              <select
                className="form-select"
                id="class"
                onChange={handleInput}
                value={formData.class}
              >
                <option value="">CHOOSE CLASS</option>
                <option value="basic7">BASIC 7</option>
                <option value="basic8">BASIC 8</option>
                <option value="basic9">BASIC 9</option>
                <option value="ss1">SSS 1</option>
                <option value="ss2">SSS 2</option>
                <option value="ss3">SSS 3</option>
              </select>
            </div>
            <div className="check-div">
              <label htmlFor="arm" className="form-label info-label">
                ARM
              </label>
              <select
                id="arm"
                className="form-select"
                onChange={handleInput}
                value={formData.arm}
              >
                <option value="">CHOOSE ARM</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="check-div">
              <label className="form-label info-label" htmlFor="teacher">
                Class Teacher
              </label>
              <input
                className="form-control"
                type="text"
                id="teacher"
                onChange={handleInput}
                value={formData.teacher}
              />
            </div>
            <div className="check-div">
              <label className="form-label info-label" htmlFor="fees">
                Next term fees
              </label>
              <input
                className="form-control"
                type="text"
                id="fees"
                onChange={handleInput}
                value={formData.fees}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn login-btn check-result"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ClassInformation;
