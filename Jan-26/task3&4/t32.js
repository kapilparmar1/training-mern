const update = async () => {
  let id = sessionStorage.getItem("id");
  try {
    const res = await fetch(`https://retoolapi.dev/BUCPSc/posts/${id}`, {
      method: "DELETE",
    });
    if (res.status != 200) {
      console.log("Something is wrong");
    }
    let response = await res.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
