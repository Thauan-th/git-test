document.addEventListener("DOMContentLoaded", function () {
  loadClickCount();

  const buttonClick = document.getElementById("alertButton");
  const buttonSecret = document.getElementById("secretButton");

  buttonClick.addEventListener("click", function (event) {
    let clicks = localStorage.getItem("clicks");
    clicks = clicks ? parseInt(clicks) + 1 : 1;
    document.getElementById("clickCount").innerText = clicks;
    localStorage.setItem("clicks", clicks);
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

// add novo comment