const game = async () => {
  let api = await fetch("https://reqres.in/api/users?page=2");
  let sh = await api.json();
  // console.log(sh.data[0].id);
  let table = document.createElement("table");

  document.getElementById("show").appendChild(table);
  sh.data.map((data) => {
    let { id, email, first_name, last_name, avatar } = data;

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let image = document.createElement("img");

    td.innerHTML = id;
    td1.innerHTML = email;
    td2.innerHTML = first_name;
    td3.innerHTML = last_name;
    image.src = avatar;

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(image);
    table.appendChild(tr);
  });

  //   document.getElementById("id").innerHTML = 7;
};

game();
