const url = "https://reqres.in/api/users?page=2";

const fetchData = async (url) => {
  const response = await fetch(url);
  const res = await response.json();

  let divMain = document.getElementById("show");

  let header = document.createElement("tr");

  Object.keys(res.data[0]).forEach((a) => {
    let heading = document.createElement("th");
    heading.innerHTML = a;
    header.appendChild(heading);
    divMain.appendChild(header);
  });

  const div = generator(res.data);
  let result = div.next();

  while (!result.done) {
    divMain.appendChild(result.value);

    result = div.next();
  }
};

function* generator(full_data) {
  for (let index = 0; index < full_data.length; index++) {
    let data = full_data[index];
    const { id, email, first_name, last_name, avatar } = data;
    let rowData = document.createElement("tr");

    let idTag = document.createElement("td");
    let emailTag = document.createElement("td");
    let first_nameTag = document.createElement("td");
    let last_nameTag = document.createElement("td");
    let avatarTag = document.createElement("img");

    idTag.innerHTML = id;
    emailTag.innerHTML = email;
    first_nameTag.innerHTML = first_name;
    last_nameTag.innerHTML = last_name;
    avatarTag.src = avatar;

    rowData.appendChild(idTag);
    rowData.appendChild(emailTag);
    rowData.appendChild(first_nameTag);
    rowData.appendChild(last_nameTag);
    rowData.appendChild(avatarTag);

    yield rowData;
  }

  return "done";
}

fetchData(url);
