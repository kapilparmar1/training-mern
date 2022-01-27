const list = async () => {
  let api = await fetch("https://retoolapi.dev/BUCPSc/posts");
  let sh = await api.json();

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

    td.innerHTML = id;
    td1.innerHTML = title;

    tr.appendChild(td);
    tr.appendChild(td1);

    table.appendChild(tr);
  });
};
list();

const search = async () => {
  let a = document.getElementById("show");
  while (a.firstChild) {
    a.removeChild(a.lastChild);
  }
  let api = await fetch("https://retoolapi.dev/BUCPSc/posts");
  let sh = await api.json();
  let flag = false;
  let Search = document.getElementById("search").value;

  let table = document.createElement("table");

  let thead = document.createElement("thead");

  const id = document.createElement("td");
  id.innerHTML = "ID";

  const title = document.createElement("td");
  title.innerHTML = "Title";

  const Body = document.createElement("td");
  Body.innerHTML = "Body";

  thead.appendChild(id);
  thead.appendChild(title);
  thead.appendChild(Body);

  table.appendChild(thead);

  document.getElementById("show").appendChild(table);

  sh.map((data) => {
    let { id, body, title } = data;
    // let titlenew = title.toLowerCase();
    if (Search === title) {
      flag = true;
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td.innerHTML = id;
      td1.innerHTML = title;
      td2.innerHTML = body;

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);

      table.appendChild(tr);
    }
  });
  if (!flag) {
    alert("Not found");
  }
};
