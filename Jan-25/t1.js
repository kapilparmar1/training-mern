const loadJson = async () => {
  const res = await fetch("https://reqres.in/api/products");
    const response = await res.json();
    try {
    if (res.status == 200) {
      return console.log(response);
    } 
  } catch {
    console.log("Error");
  }
};

loadJson();
