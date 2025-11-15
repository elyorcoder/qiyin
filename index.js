alert("(Rahmat) kiyin vazifa uchun");

const elname = document.querySelector(".wrapper__profile-form-div-input");
const elage = document.querySelector(".wrapper__profile-form-div-input1");
const elemail = document.querySelector(".wrapper__profile-form-div-input2");
const elhobby = document.querySelector(".wrapper__profile-form-div-input3");
const elbirth = document.querySelector(".wrapper__profile-form-div-input4");
const elname2 = document.querySelector(".wrapper__profile-p");
const elage2 = document.querySelector(".wrapper__profile-p1");
const elemail2 = document.querySelector(".wrapper__profile-p2");
const elhobby2 = document.querySelector(".wrapper__profile-p3");
const elbirth2 = document.querySelector(".wrapper__profile-p4");
const elsave = document.querySelector(".wrapper__profile-form-buttons-save");

function bigfirst(a) {
  //   const b = a.trim();
  //   const c = b.charAt(0);
  //   const s = c.toUpperCase();
  //   const d = b.replace(c, s);
  //   a.value = d;
  //   return a;
  return  a.value.toUpperCase();
}
function small(a) {
  return a.value.toLowerCase();
}
function number(a) {
  return Number(a.value);
}
function repeat(a) {
  return a.value.repeat(3);
}
function calculate(a) {
  const b = 2025;
  return b - a.value.trim();
}
elsave.addEventListener("click", () => {
  elname2.textContent = bigfirst(elname);
  elemail2.textContent = small(elemail);
  elage2.textContent = number(elage);
  elhobby2.textContent = repeat(elhobby);
  elbirth2.textContent = calculate(elbirth);
});
