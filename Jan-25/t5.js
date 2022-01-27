const get = async () => {
  let api = await fetch("https://reqres.in/api/products", {
    method: "GET",
  });
  let sh = await api.json();
  // console.log(sh.data[0].id);
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");

  const id = document.createElement("td");
  id.innerHTML = "ID";

  const Name = document.createElement("td");
  Name.innerHTML = "Name";
  const Year = document.createElement("td");
  Year.innerHTML = "Year";
  const color = document.createElement("td");
  color.innerHTML = "Color";
  const pvalue = document.createElement("td");
  pvalue.innerHTML = "Pentone Value";

  thead.appendChild(id);
  thead.appendChild(Name);
  thead.appendChild(Year);
  thead.appendChild(color);
  thead.appendChild(pvalue);
  table.appendChild(thead);

  document.getElementById("show").appendChild(table);
  sh.data.map((data) => {
    let { id, name, year, color, pantone_value } = data;

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td.innerHTML = id;
    td1.innerHTML = name;
    td2.innerHTML = year;
    td3.innerHTML = color;
    td4.innerHTML = pantone_value;

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  });
};

get();
