"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import ShowHidePassword from "./ShowHidePassword";

function HomeForm() {
  const [userType, setUserType] = useState("");
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setUserType(e.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (userType === "Admin") {
      redirect("/admin-dashboard");
    } else if (userType === "Staff") {
      redirect("/staff-dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="gap-2 d-flex flex-column">
        <div>
          <label className="form-label login-label" htmlFor="usertype">
            User:
          </label>
          <select
            name="usertype"
            className="form-select"
            id="usertype"
            onChange={handleChange}
            value={userType}
          >
            <option value="" disabled>
              Choose User Type
            </option>
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
