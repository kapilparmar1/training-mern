const ROUTE = ({ id }) => {
  return (
    <>
      <input type="text" placeholder="enter the name to be Edited" />
      <button
        onClick={async () => {
          try {
            const res = await fetch(
              `https://retoolapi.dev/BUCPSc/posts/${id}`,
              {
                method: "PUT",
                body: JSON.stringify(newpost),
                headers: {
                  "Content-type": "application/json",
                },
              }
            );
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
        }}
      >
        Edit
      </button>{" "}
    </>
  );
};

export default ROUTE;
