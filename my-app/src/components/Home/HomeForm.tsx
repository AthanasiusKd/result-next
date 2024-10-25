import ShowHidePassword from "./ShowHidePassword";

function HomeForm() {
  return (
    <form className="card">
      <div className="gap-2 d-flex flex-column">
        <div>
          <label className="form-label login-label" htmlFor="usertype">
            User:
          </label>
          <select
            name="usertype"
            className="form-select"
            id="usertype"
          >
            <option value="">Choose User Type</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <div>
          <label className="form-label login-label" htmlFor="password">
            Password:
          </label>
          <ShowHidePassword />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button type="submit" className="btn login-btn">
            Log In
          </button>
        </div>
      </div>
    </form>
  );
}

export default HomeForm;
