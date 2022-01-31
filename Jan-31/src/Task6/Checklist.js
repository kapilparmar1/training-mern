import { useState } from "react";
const Checklist = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      {/* <h1>{data}</h1> */}
      <h1>THIS IS A CHECKLIST</h1>
      <table>
        <tr>
          <td>
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked1(e.target.checked);
              }}
              checked={checked1}
            />
          </td>
          <td>
            <h1>Go to GYM</h1>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked2(e.target.checked);
              }}
              checked={checked2}
            />
          </td>
          <td>
            <h1>Eat Healthy</h1>
          </td>
        </tr>

        <tr>
          <td>first one is {!checked1 ? "Unchecked" : "Checked"}</td>
        </tr>
        <tr>
          <td>first one is {!checked2 ? "Unchecked" : "Checked"}</td>
        </tr>
      </table>

      <div></div>
    </>
  );
};

export default Checklist;
