// ===============================
// PART 3: FORM VALIDATION
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("formMessage");

  if (name === "") {
    message.textContent = "❌ Name cannot be empty.";
    message.style.color = "red";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }
  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";
});

// Toggle password visibility
document.getElementById("togglePwd").addEventListener("click", function() {
  let pwdField = document.getElementById("password");
  pwdField.type = (pwdField.type === "password") ? "text" : "password";
});

// ===============================
// PART 1 + 2: INTERACTIVE ELEMENTS
// ===============================

// Click Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// Light/Dark Mode
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// FAQ Toggle (Collapsible)
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", function() {
    let answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
