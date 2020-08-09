let btn = document.querySelectorAll(".btn");
let toast = document.querySelector(".toast");
const seconds = 3;
btn.forEach((b) => {
  b.addEventListener("click", () => {
    toast.style.visibility = "visible";
    toast.style.opacity = "1";
    toast.style.top = "20px";
    toast.style.transition = "0.2s";
    toast.style.background = b.value;
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.visibility = "hidden";
      toast.style.top = "0px";
    }, seconds * 1000);
  });
});
