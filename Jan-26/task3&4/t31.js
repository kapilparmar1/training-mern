const save = async (newpost) => {
  let id = sessionStorage.getItem("id");
  try {
    const res = await fetch(`https://retoolapi.dev/BUCPSc/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newpost),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status != 200) {
      console.log("Something is wrong");
    }
    let response = await res.json();
    console.log(response);
    alert("Changed");
    window.location.href = "t3.html";
  } catch (err) {
    console.log(err);
  }
};

const update = async () => {
  let Newt = document.getElementById("new").value;
  let Newb = document.getElementById("newb").value;
  const newpost = {
    title: Newt,
    body: Newb,
  };

  save(newpost);
};
