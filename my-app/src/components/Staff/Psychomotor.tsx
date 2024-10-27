import NameList from "@/db/NameList";
import { FormEvent } from "react";

function Psychomotor() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div style={{ padding: "24px" }}>
      <div className="rating-container">
        <div className="rating-table">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Key</th>
                <th style={{ width: "75%" }}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>Excellent</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Very Good</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Poor</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Very Poor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4>Please, Choose a student and enter the psychomotor scores</h4>
      <div>
        <form onSubmit={handleSubmit} className="table-container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Select Student from the drop down menu</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select className="form-select">
                      <option value="">Choose a student</option>
                      {NameList.map((item) => (
                        <option key={item.id}>
                          {item.id}. {item.text}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>Punctuality</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Personal Relationships</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Handwriting</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Diction</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Team Spirit</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Fluency</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Neatness</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Attentiveness</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Sports</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Honesty</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Parental Involvement</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Tools Handling</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ justifyContent: "center", display: "flex" }}>
                    <button className="btn link-btn" type="button">
                      View/Edit
                    </button>
                  </td>
                  <td>Leadership</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Perseverance</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Craft</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ justifyContent: "space-around", display: "flex" }}
                  >
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    <button className="btn btn-primary" type="reset">
                      Reset
                    </button>
                  </td>
                  <td>Politeness</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Initiative</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                  <td>Music</td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      max={5}
                      min={1}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Psychomotor;
