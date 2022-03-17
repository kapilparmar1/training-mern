import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import Validation from "./validation";
import "../components/Signup.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const [errors, setError] = useState({});

  /*let name ,value;
const  handleInput = (e)=>{
  console.log(e);
  name = e.currentTarget.name;
value = e.currentTarget.value;
  setUser({...user,[name] : value});
} 
*/
  const handleInputs = (ab, bc) => {
    console.log(ab, bc);

    setUser({ ...user, [ab]: bc });
  };
  const PostData = async (e) => {
    e.preventDefault();

    setError(Validation(user));
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("User is already registered");
    } else if (res.status === 421) {
      window.alert("passwod");
    } else if (res.status === 423) {
      //  window.alert("Invalid details");
    } else {
      window.alert(" Registration successfull");
      history.push("/login");
    }
  };

  return (
    <>
      <form id="form1" method="POST">
        <div class="main">
          <div class="form-box1 ">
            <h1>SIGN UP</h1>
            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-account material-icons-name"></i>
              </div>
              <input
                type="text"
                className="input-field1"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.name && <p className="erro">{errors.name}</p>}
            </div>
            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </div>
              <input
                type="email"
                className="input-field1"
                name="email"
                id="email"
                placeholder="Hey123@gmail.com"
                value={user.email}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.email && <p className="erro">{errors.email}</p>}
            </div>

            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-phone material-icons-name"></i>
              </div>
              <input
                type="text"
                className="input-field1"
                name="phone"
                id="phone"
                placeholder="9998883625"
                value={user.phone}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.phone && <p className="erro">{errors.phone}</p>}
            </div>

            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-book-image material-icons-name"></i>
              </div>
              <input
                type="text"
                className="input-field1"
                name="work"
                id="work"
                placeholder="Student"
                value={user.work}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.work && <p className="erro">{errors.work}</p>}
            </div>

            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </div>
              <input
                type="password"
                className="input-field1"
                name="password"
                id="password"
                placeholder="**********"
                value={user.password}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.password && <p className="erro">{errors.password}</p>}
            </div>

            <div className="rowe">
              <div className="i">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </div>
              <input
                type="password"
                className="input-field1"
                name="cpassword"
                id="cpassword"
                placeholder="**********"
                value={user.cpassword}
                onChange={(e) => {
                  handleInputs(e.target.name, e.target.value);
                }}
              />
              {errors.cpassword && <p className="erro">{errors.cpassword}</p>}
            </div>
            <div className="nayah">
              <button type="submit" className="submit-btn1 " onClick={PostData}>
                Register
              </button>
              <NavLink to="/login" className="link-bttn1">
                Already registered?
              </NavLink>
            </div>
            <div className="link">
              <div
                className="links11"
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=Kapilsingh1stprogramaswebdesigner.com/whatsay",
                    "facebook-share-dialog",
                    "width=800,height=600"
                  );
                }}
              >
                <p>f</p>
              </div>
              <div
                className="links21"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/?url=Kapilsingh1stprogramaswebdesigner.com/whatsay",
                    "insta-share-dialog",
                    "width=800,height=600"
                  );
                }}
              >
                <p>
                  <i class="zmdi zmdi-instagram"></i>
                </p>
              </div>
              <div
                className="links31"
                onClick={() => {
                  window.open(
                    "https://twitter.com/intent/tweet?text=Kapilsingh1stprogramaswebdesigner.com/whatsay",
                    "twitter-share-dialog",
                    "width=800,height=600"
                  );
                }}
              >
                <p>
                  <i class="zmdi zmdi-twitter"></i>
                </p>
              </div>
              <div
                className="links41"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/share?id=Kapilsingh1stprogramaswebdesigner.com/whatsay",
                    "linkedin-share-dialog",
                    "width=800,height=600"
                  );
                }}
              >
                <p>
                  <i class="zmdi zmdi-linkedin"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
