import { ChangeEvent, FormEvent, useState } from "react";
import SubjectList from "@/db/SubjectList";

interface Props {
  onSubmit: (arg0: string) => void;
}

function EnterScores(props: Props) {
  const [formData, setFormData] = useState({
    session: "",
    term: "",
    class: "",
    arm: "",
    subject: "",
  });

  function handleInput(event: ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit("score");
    console.log(formData);
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="py-4">
        <form onSubmit={handleSubmit} className="card check-result">
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
            <label className="form-label result-label" htmlFor="arm">
              ARM
            </label>
            <select
              className="form-select"
              id="arm"
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
            <label className="form-label result-label" htmlFor="subject">
              SUBJECT
            </label>

            <select
              className="form-select"
              id="subject"
              onChange={handleInput}
              value={formData.subject}
            >
              <option value="" disabled>
                CHOOSE SUBJECT
              </option>
              {SubjectList.map((item) =>(
                <option key={item.id}>
                  {item.text}
                </option>
              ))}
            </select>

            {/* <select
              className="form-select"
              id="subject"
              onChange={handleInput}
              value={formData.subject}
            >
              <option value="" disabled>
                CHOOSE SUBJECT
              </option>
              <option>Maths</option>
              <option>Eng</option>
              <option>Sci</option>
            </select> */}
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn login-btn check-result" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnterScores;
