// Task 1
document.addEventListener("DOMContentLoaded", function() {
  const riskDashboard = document.getElementById("riskDashboard");

  console.log("Risk Dashboard Loaded");

// Task 2
document.getElementById("riskForm").addEventListener("submit", function(e) {
  e.preventDefult();

  const riskName = document.getElementById("riskName").value;
  const riskLevel = document.getElementById("riskLevel").value;
  const department = document.getElementById("department").value;

  addRiskItem(riskName, riskLevel, department);


  document.getElementById("riskName").value = "";
  document.getElementById("department").value = "";
});

// Task 3
function addRiskItem(riskName, riskLevel, department) {
  const riskCard = document.createElement("div");
  riskCard.classList.add("riskCard");

  switch (riskLevel) {
    case "Low":
      riskCard.style.backgroundColor = "green";
      brerak;
    case "Medium":
      riskCard.style.backgroundColor = "yellow";
      break;
    case "High":
      riskCard.style.backgroundColor = "red";
      break;
  }

  riskCard.innerHTML =
    <h3>${riskName}</h3>
  <p>Risk Level: ${riskLevel}</p>
  <p>Department: ${department}</p>
  <p>Department: ${department}</p>
  <button class="resolveButton">Resolve</button>
  ';
    riskDashboard.appendChild(riskCard);

  cosnt resolveButton = riskCard.querySelector(".resolveButton");
  resolveButton.addEventListener("click", function() {
    riskCard.remove();
  });
}

// Task 5 
document.getElementById("increaseRiskButton").addEventListener("click", function()
  const riskCards = document.querySelectorAll(".riskCard");
  riskCards.forEach(card => {
    const riskLevel = card.querySelector("p").innerText.replace("Risk Level: ", "")

    if (riskLevel === "Low") {
      card.querySelector("p").innerText = "Risk Level: Medium";
      card.style.backgroundColor = "yellow";
    } else if (riskLevel === "Medium") {
      card.querySelector("p").innerText = "Risk Level: High";
      card.style.backgroundColor = "red";
    }
  });
});

// Task 6 
riskDashboard.addEventListener("click", function(e) {
  if (e.target === riskDashboard) {
    console.log("Dashboard clicked");
  }
});
});
