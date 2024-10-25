'use client'

import { ChangeEvent, FormEvent } from "react";

interface Props {
  handleInput: (event: ChangeEvent<HTMLSelectElement>) => void ,
  handleSubmit: (event: FormEvent) => void,
  class: string,
  arm: string
}

export default function SmallForm(props: Props) {
  
  return (
    <form className="small-form" onSubmit={props.handleSubmit}>
      <div className="check-div">
        <label className="form-label small-label" htmlFor="class">
          Class
        </label>
        <select
          onChange={props.handleInput}
          value={props.class}
          className="form-select"
          id="class"
          style={{ width: "180px" }}
        >
          <option value="null">CHOOSE CLASS</option>
          <option value="BASIC 7">BASIC 7</option>
          <option value="BASIC 8">BASIC 8</option>
          <option value="BASIC 9">BASIC 9</option>
          <option value="SS 1">SSS 1</option>
          <option value="SS 2">SSS 2</option>
          <option value="SS 3">SSS 3</option>
        </select>
      </div>
      <div className="check-div">
        <label className="form-label small-label" htmlFor="arm">
          ARM
        </label>
        <select
          onChange={props.handleInput}
          value={props.arm}
          className="form-select"
          id="arm"
          style={{ width: "180px" }}
        >
          <option value="null">CHOOSE ARM</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <button className="display-btn">Display</button>
    </form>
  );
}
