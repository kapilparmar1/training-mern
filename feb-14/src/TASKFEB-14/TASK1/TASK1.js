import React, { useEffect, useState } from "react";
import store from "../Store";
import userAction, { userActionEdit } from "../Action";

const TASK1 = () => {
  const [ID, setId] = useState("");
  const [DATA, setDATA] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Image: "",
  });
  const [Show, setShow] = useState([]);
  const ONCHANGE = (Ename, Evalue) => {
    setDATA({ ...DATA, [Ename]: Evalue });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UserList</h1>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        {ID === "" ? (
          ""
        ) : (
          <input readOnly type="text" name="ID" placeholder={ID} />
        )}
        <br />
        <input
          onChange={(e) => ONCHANGE(e.target.name, e.target.value)}
          type="text"
          name="FirstName"
          placeholder="FirstName"
        />
        <br />
        <input
          onChange={(e) => ONCHANGE(e.target.name, e.target.value)}
          type="text"
          name="LastName"
          placeholder="LastName"
        />
        <br />
        <input
          onChange={(e) => ONCHANGE(e.target.name, e.target.value)}
          type="text"
          name="Email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={(e) => ONCHANGE(e.target.name, e.target.value)}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <br />
        <input
          style={{ marginLeft: "83px" }}
          onChange={(e) => {
            let file = e.target.files;

            const reader = new FileReader();
            reader.onload = () => {
              setDATA({ ...DATA, Image: reader.result });
              console.log(DATA);
            };
            reader.readAsDataURL(file[0]);
          }}
          type="file"
          name="Image"
        />
        <br />
        <button
          onClick={() => {
            console.log(ID);
            if (ID === "") {
              store.dispatch(userAction(DATA));
              setShow(store.getState());
            } else {
              store.dispatch(userActionEdit(DATA, ID));
              console.log("Done Edit");
            }
            setId("");
            setShow(store.getState());
          }}
        >
          {ID !== "" ? "Update" : "Submit"}
        </button>

        <button
          style={{ marginLeft: "20px" }}
          onClick={() => {
            console.log(store.getState());
          }}
        >
          GetState
        </button>
      </div>
      <table>
        <th>
          <tr>
            <td
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              FirstName
            </td>
            <td
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              LastName
            </td>
            <td
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Email
            </td>
            <td
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Password
            </td>
            <td
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Image
            </td>
          </tr>
        </th>
      </table>
      {Show
        ? Show.map((data, index) => (
            <div style={{ display: "flex" }} key={index}>
              <div>
                <table>
                  <tr>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.FirstName}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.LastName}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.Email}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      {data.Password}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                    >
                      <img src={data.Image} alt="" width={70} height={70} />
                    </td>
                  </tr>
                </table>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <button
                  onClick={() => {
                    setId(index);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export default TASK1;
