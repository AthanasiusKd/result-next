import { useState, FormEvent, ChangeEvent } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    staff: "",
    password: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
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
              Create Authorization For Teachers 
            </p>
            <div className="check-div">
              <label className="form-label result-label" htmlFor="staff">
                Staff Name
              </label>
              <input
                className="form-control"
                type="text"
                id="staff"
                onChange={handleInput}
                value={formData.staff}
              />
            </div>
            <div className="check-div">
              <label className="form-label result-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="text"
                id="password"
                onChange={handleInput}
                value={formData.password}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn login-btn check-result"
                type="submit"
              >
                create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
