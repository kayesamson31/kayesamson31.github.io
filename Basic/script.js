const buttons = document.querySelectorAll("nav button");
const screens = document.querySelectorAll(".screen");

document.body.addEventListener("click", (e) => {
  if (e.target.matches("button[data-target]")) {
    const targetId = e.target.getAttribute("data-target");

    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");
  }

  // Submit Budget button from Screen 2 → Go to Screen 3
  if (e.target.matches("#screen2 .approval-btn")) {
    document.querySelectorAll(".screen").forEach((screen) =>
      screen.classList.remove("active")
    );
    document.getElementById("screen3").classList.add("active");
  }

  // Supplement Budget button from Screen 3 → Go to Screen 4
  if (e.target.matches("#screen3 .Realign-btn")) {
    document.querySelectorAll(".screen").forEach((screen) =>
      screen.classList.remove("active")
    );
    document.getElementById("screen4").classList.add("active");
  }
// Handle Approved button from activity logs (Screen 1)
if (e.target.matches(".view-approved-btn")) {
    document.querySelectorAll(".screen").forEach((screen) =>
      screen.classList.remove("active")
    );
    document.getElementById("screen3").classList.add("active");
  }
  // Handle Approved button from activity logs (Screen 1)
  if (e.target.matches(".view-finished-btn")) {
    document.querySelectorAll(".screen").forEach((screen) =>
      screen.classList.remove("active")
    );
    document.getElementById("screen3").classList.add("active");
  }
  
});
