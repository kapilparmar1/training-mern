const showNotification = () => {
  setTimeout(() => {
    document.getElementById("h").innerHTML = "";
  }, 1500);
  setTimeout(() => {
    document.getElementById("h").innerHTML = "You missed a Notification";
  }, 1700);
};

showNotification();
