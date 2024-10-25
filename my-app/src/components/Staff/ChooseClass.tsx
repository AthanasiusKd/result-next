import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  name: string,
  onSubmit: (arg0: string) => void
}

function ChooseClass(props: Props) {
  const [formValues, setFormValues] = useState({
    session: "",
    term: "",
    class: "",
    arm: "",
  });

  function handleInput(event: ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (props.name === "Comment") {
      props.onSubmit("comments");
    } else if (props.name === "Psychomotor") {
      props.onSubmit("psychomotor");
    }
    console.log(formValues);
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
              onChange={handleInput}
              value={formValues.session}
              className="form-select"
              id="session"
            >
              <option value="">CHOOSE SESSION</option>
              <option value="2024">2024/2025</option>
            </select>
          </div>
          <div className="check-div">
            <label className="form-label result-label" htmlFor="term">
              Term
            </label>
            <select onChange={handleInput} value={formValues.term} className="form-select" id="term">
              <option value="null">CHOOSE TERM</option>
              <option value="1st">FIRST TERM</option>
              <option value="2nd">SECOND TERM</option>
              <option value="3rd">THIRD TERM</option>
            </select>
          </div>
          <div className="check-div">
            <label className="form-label result-label" htmlFor="class">
              Class
            </label>
            <select onChange={handleInput} value={formValues.class} className="form-select" id="class">
              <option value="null">CHOOSE CLASS</option>
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
            <select onChange={handleInput} value={formValues.arm} className="form-select" id="arm">
              <option value="null">CHOOSE ARM</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
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

export default ChooseClass;
