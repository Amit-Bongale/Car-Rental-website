import AdminNav from "../AdminNav/AdminNav";

import "./Insertcars.css";

function Insertcars() {
  return (
    <div className="container-admin">
      <AdminNav></AdminNav>

      <div className="cars-input-container">
        <table className="cars-input-table">

          <tbody>

            <tr className="cars-insert-body" >
              <td className="row">
                <label className="insert-car-label">Car Model</label>
              </td>
              <td className="input-row">
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Name</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">car Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Seats</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Pricing per Day</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Contact Number</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Email</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Image 1</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Image 2</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Image 3</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Image 4</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" />
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Insertcars;
