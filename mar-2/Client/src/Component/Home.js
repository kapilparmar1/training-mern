import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action1, { Action2, Action3 } from "./redux/actions/action";

const Home = (props) => {
  const [id, setId] = useState("");
  const regPat = /^[1-3]*$/;
  console.log("Stat is : ", props.myState);
  return (
    <>
      <div>
        <h1>{props.myState?.home}</h1>
        <button name="home" onClick={() => props.myHome()}>
          Call Home
        </button>
      </div>
      <br />
      <div>
        {props.myState.author === [] ? (
          ""
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Author</th>
              </tr>
            </thead>
            {props.myState.author.map((data, index) => (
              <tbody key={index}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
        <br />
        <button name="author" onClick={() => props.myAuthor()}>
          Call Author
        </button>
      </div>
      <br />
      <div>
        {props.myState.user ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.myState.user.id}</td>
                <td>{props.myState.user.name}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
        <br />
        <input
          type="text"
          placeholder="id : 1-3"
          onChange={(e) => {
            setId((data) => (data = e.target.value));
          }}
        />
        <button
          name="user"
          onClick={() => {
            if (id) {
              if (regPat.exec(id) !== null) {
                props.myUser(id);
              } else {
                alert("Invalid ID");
              }
            } else {
              alert("ID is required");
            }
          }}
        >
          Call User
        </button>
      </div>
      <br />
    </>
  );
};

const myHome = () => Action1();
const myAuthor = () => Action2();
const myUser = (id) => Action3(id);

const DISPATCH = (dispatch) => {
  return bindActionCreators({ myHome, myAuthor, myUser }, dispatch);
};

const STATE = (state) => {
  return {
    myState: state,
  };
};
const CONNECT = connect(STATE, DISPATCH)(Home);
export default CONNECT;
