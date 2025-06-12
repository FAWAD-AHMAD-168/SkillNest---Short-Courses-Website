
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formmsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !subject || !message) {
      showMessage("Please fill in all fields.", "red");
      return;
    }

    if (!emailPattern.test(email)) {
      showMessage("That doesn’t look like a valid email.", "red");
      return;
    }

    showMessage("Thanks for reaching out! We'll get back to you soon.", "green");
    form.reset();
  });

  function showMessage(msg, color) {
    formMsg.style.display = "block";
    formMsg.style.color = color;
    formMsg.textContent = msg;
  }

