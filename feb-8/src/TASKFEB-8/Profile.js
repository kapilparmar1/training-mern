import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [url, seturl] = useState("");

  const getData = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => seturl(data));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(url);
  return (
    <div>
      <h1>{url ? url.data.first_name + "-" + url.data.last_name : ""}</h1>
      {url ? <img src={url.data.avatar} alt=""></img> : ""}
    </div>
  );
};

export default Profile;
