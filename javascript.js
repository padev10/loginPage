let eyeBtn = document.getElementById("eye");
let clicked = 1;

eyeBtn.addEventListener("click", function () {
  if (clicked) {
    // chow password
    document.getElementById("input2").type = "text";
    // change eye image
    document.getElementById("eye").className = "fa fa-eye";
    clicked = 0;
  } else {
    // hide password
    document.getElementById("input2").type = "password";
    // change eye image
    let a = document.getElementById("eye");
    a.classList.remove("fa-eye");
    a.classList.add("fa-eye-slash");
    clicked = 1;
  }
});
