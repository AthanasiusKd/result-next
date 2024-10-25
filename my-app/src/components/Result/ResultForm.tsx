"use client";

import { useState, FormEvent, ChangeEvent } from "react";

function ResultForm() {
  const [formData, setFormData] = useState({
    session: "",
    term: "",
    class: "",
    arm: "",
    examId: "",
    pin: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLSelectElement> ) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="result-body" style={{ height: "100vh" }}>
        <div>
          <form onSubmit={handleSubmit} className="card check-result">
            <p className="check-head">
              Enter Your Details Below and Click Enter
            </p>
            <div className="check-div">
              <label className="form-label result-label" htmlFor="session">
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
              <label className="form-label result-label" htmlFor="term">
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
              <label className="form-label result-label" htmlFor="class">
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
              <label htmlFor="arm" className="form-label result-label">
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
              <label className="form-label result-label" htmlFor="examId">
                EXAM NO
              </label>
              <input
                className="form-control"
                type="number"
                id="examId"
                placeholder="1001"
                onChange={handleInput}
                value={formData.examId}
              />
            </div>
            <div className="check-div">
              <label className="form-label result-label" htmlFor="pin">
                Pin
              </label>
              <input
                className="form-control"
                type="number"
                id="pin"
                placeholder="123456"
                onChange={handleInput}
                value={formData.pin}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn login-btn check-result" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResultForm;
