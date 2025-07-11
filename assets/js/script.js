window.addEventListener("load", () => {
  const allItems = document.querySelectorAll(".fade-in");
  let items;
  if (window.innerWidth <= 576) {
    items = Array.from(allItems).filter((el) => {
      if (window.innerWidth <= 576 && el.classList.contains("desktop-only")) {
        el.remove();
        return false;
      }
      return true;
    });
  } else {
    items = Array.from(allItems);
  }
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 650); //delay each by 650ms
  });
});
