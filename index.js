alert("hello");

const elname = document.querySelector(".wrapper__profile-form-div-input");
const elage = document.querySelector(".wrapper__profile-form-div-input1");
const elemail = document.querySelector(".wrapper__profile-form-div-input2");
const elhobby = document.querySelector(".wrapper__profile-form-div-input3");
const elbirth = document.querySelector(".wrapper__profile-form-div-input4");
const elgender = document.querySelector(
  ".wrapper__profile-form-genders-gender"
);
const elgenderoy = document.querySelector(
  ".wrapper__profile-form-genders-genderoy"
);
const elname2 = document.querySelector(".wrapper__profile-p");
const elage2 = document.querySelector(".wrapper__profile-p1");
const elemail2 = document.querySelector(".wrapper__profile-p2");
const elhobby2 = document.querySelector(".wrapper__profile-p3");
const elbirth2 = document.querySelector(".wrapper__profile-p4");
const elgender2 = document.querySelector(".wrapper__profile-p5");
const elsave = document.querySelector(".wrapper__profile-form-buttons-save");
const namech = /^[A-Za-z]{8,}$/;
const agech = /^(?:[1-9]|[1-9][0-9]|120){4,}$/;
const emailch = /^[A-Za-z][A-Za-z._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/;
const hobbych = /^[A-Za-z]{10,}$/;
const datech = /^[0-9]{5,}$/;
function toastify(){
  
}
elname.addEventListener("input", () => {
  if (namech.test(elname.value.trim())) {
    elname.style.border = "5px solid red";
  } else {
    elname.style.border = "2px solid aqua";
  }
});
elage.addEventListener("input", () => {
  if (agech.test(elage.value.trim())) {
    elage.style.border = "5px solid red";
  } else if (elage.value.trim() >= 126) {
    elage.style.border = "5px solid red";
  } else {
    elage.style.border = "2px solid aqua";
  }
});
elemail.addEventListener("input", () => {
  if (emailch.test(elemail.value.trim())) {
    elemail.style.border = "5px solid red";
  } else {
    elemail.style.border = "2px solid aqua";
  }
});
elhobby.addEventListener("input", () => {
  if (hobbych.test(elhobby.value.trim())) {
    elhobby.style.border = "5px solid red";
  } else {
    elhobby.style.border = "2px solid aqua";
  }
});
elbirth.addEventListener("input", () => {
  if (datech.test(elbirth.value.trim())) {
    elbirth.style.border = "5px solid red";
  } else {
    elbirth.style.border = "2px solid aqua";
  }
});

function bigfirst(a) {
  //   const b = a.trim();
  //   const c = b.charAt(0);
  //   const s = c.toUpperCase();
  //   const d = b.replace(c, s);
  //   a.value = d;
  //   return a;
  return a.value.toUpperCase();
}
function small(a) {
  return a.value.toLowerCase();
}
function number(a) {
  let b = a.value;
  if ((b > 0) & (b <= 12)) {
    b = "Child";
    return b;
  } else if ((b > 12) & (b <= 19)) {
    b = "Teen";
    return b;
  } else if ((b > 19) & (b <= 59)) {
    b = "Adult";
    return b;
  } else if ((b > 59) & (b <= 125)) {
    b = "Senior";
    return b;
  } else {
    b = "Sen Haliyam Tirikmisan?";
    return b;
  }
}
function repeat(a) {
  return a.value.repeat(2);
}
function calculate(a) {
  const b = 2025;
  return b - a.value.trim();
}
let count = 0,
  count2 = 0;
elgender.addEventListener("click", () => {
  elgender.style.border = "2px solid aqua";
  elgender.style.background = "black";
  elgender.style.color = "aqua";

  elgenderoy.style.border = "none";
  elgenderoy.style.background = "aqua";
  elgenderoy.style.color = "black";
  count = true;
  count2 = false;
});
elgenderoy.addEventListener("click", () => {
  elgenderoy.style.border = "2px solid aqua";
  elgenderoy.style.background = "black";
  elgenderoy.style.color = "aqua";

  elgender.style.border = "none";
  elgender.style.background = "aqua";
  elgender.style.color = "black";
  count2 = true;
  count = false;
});
elsave.addEventListener("click", () => {
  elname2.textContent = bigfirst(elname);
  elemail2.textContent = small(elemail);
  elage2.textContent = number(elage);
  elhobby2.textContent = repeat(elhobby);
  elbirth2.textContent = calculate(elbirth);
  if (count) {
    elgender2.textContent = "Male";
  } else if (count2) {
    elgender2.textContent = "Female";
  } else {
    alert("Chouse a gender");
  }
  Toastify({
    text: "You are right",
    duration: 1500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  Toastify({
    text: "Yahooo",
    duration: 1500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  
});
