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
    let { id, body, title } = data;

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "Edit";
    btn1.onclick = function () {
      sessionStorage.setItem("id", id);
      window.open(
        "file:///C:/Users/kapil/test/Task2-javascript/Jan-2022/training-mern/Jan-26/task3/t31.html"
      );
    };

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";
    btn2.onclick = function () {
      sessionStorage.setItem("id", id);
      window.open(
        "file:///C:/Users/kapil/test/Task2-javascript/Jan-2022/training-mern/Jan-26/task3/t32.html"
      );
    };

    let btn3 = document.createElement("button");
    btn3.innerHTML = "Show";
    btn3.onclick = function () {
      sessionStorage.setItem("body", body);
      window.open(
        "file:///C:/Users/kapil/test/Task2-javascript/Jan-2022/training-mern/Jan-26/task3/t33.html"
      );
    };

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
