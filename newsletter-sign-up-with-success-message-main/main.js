if (window.screen.width > 768) {
  document.getElementById("cover").src =
    "./assets/images/illustration-sign-up-desktop.svg";
}

function submitHandler(e) {
  e.preventDefault();
  document.getElementById("email-input").classList.remove("error");
  document.getElementById("warn").classList.add("hide");

  const formData = new FormData(e.target);
  let data = Object.fromEntries(formData);
  data = data["email"].match(/^[a-zA-Z0-9._%+-]*@[a-z]+\.[a-z]+$/g);

  if (data) {
    document.getElementById("email-input").value = "";
    document.getElementById("input-email").innerHTML = data[0];
    document.querySelector("dialog").open = true;
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
    setInterval(() => {
      document.querySelector("dialog").classList.add("animate-in");
    }, 200);
  } else {
    document.getElementById("email-input").classList.add("error");
    document.getElementById("warn").classList.remove("hide");
  }
}

const form = document.getElementById("email");
form.addEventListener("submit", submitHandler);
