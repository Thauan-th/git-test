document.addEventListener("DOMContentLoaded", function () {
  const buttonClick = document.getElementById("alertButton");
  const buttonSecret = document.getElementById("secretButton");

  buttonClick.addEventListener("click", function (event) {
    alert("Hello, World!");
  });

  buttonSecret.addEventListener("click", function (event) {
    const secret = document.getElementById("secret");

    if (secret.style.display === "none") {
      secret.style.display = "block";
    } else {
      secret.style.display = "none";
    }
  });
});
