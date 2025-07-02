window.addEventListener("load", () => {
  const items = document.querySelectorAll(".fade-in");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 650); //delay each by 650ms
  });
});
