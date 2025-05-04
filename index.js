document.addEventListener("DOMContentLoaded", function () {
  loadClickCount();

  const buttonClick = document.getElementById("alertButton");
  const buttonReset = document.getElementById("cleanButton");
  const buttonSecret = document.getElementById("secretButton");

  buttonClick.addEventListener("click", function (event) {
    let clicks = localStorage.getItem("clicks");
    clicks = clicks ? parseInt(clicks) + 1 : 1;
    document.getElementById("clickCount").innerText = clicks;
    localStorage.setItem("clicks", clicks);
  });

  buttonReset.addEventListener("click", function (event) {
    resetClickCount();
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

function loadClickCount() {
  let clicks = localStorage.getItem("clicks");
  clicks = clicks ? parseInt(clicks) : 0;
  document.getElementById("clickCount").innerText = clicks;
}

function resetClickCount() {
  localStorage.removeItem("clicks");
  document.getElementById("clickCount").innerText = 0;
}
