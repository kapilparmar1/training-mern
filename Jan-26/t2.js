const list = async () => {
  let api = await fetch("https://retoolapi.dev/BUCPSc/posts");
  let sh = await api.json();
  // console.log(sh.data[0].id);
  let table = document.createElement("table");

  let thead = document.createElement("thead");

  const id = document.createElement("td");
  id.innerHTML = "ID";

  const title = document.createElement("td");
  title.innerHTML = "Title";

  thead.appendChild(id);
  thead.appendChild(title);

  table.appendChild(thead);

  document.getElementById("show").appendChild(table);
  sh.map((data) => {
    let { id, title } = data;

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "Edit";

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";

    let btn3 = document.createElement("button");
    btn3.innerHTML = "Show";

    td.innerHTML = id;
    td1.innerHTML = title;

    tr.appendChild(td);
    tr.appendChild(td1);

    tr.appendChild(btn1);
    tr.appendChild(btn2);
    tr.appendChild(btn3);

    table.appendChild(tr);
  });
};
