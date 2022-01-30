const getTitle = async () => {
  let response = await fetch("https://retoolapi.dev/BUCPSc/posts");
  let res = await response.json();

  res.map((data) => {
    console.log(data.title);
  });
};

getTitle();
