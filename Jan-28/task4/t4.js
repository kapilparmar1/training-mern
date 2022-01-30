const New = () => {
  document.write("String");

  document.getElementById("p").innerHTML = " By ID";
  let Name = document.getElementsByName("p");
  console.log(Name);

  let tag = document.getElementsByTagName("p");
  console.log(tag);

  let ClasName = document.getElementsByClassName("p");
  console.log(ClasName);
};
New();
