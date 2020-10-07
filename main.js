const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;
addEventListener("load", () => {
  document.addEventListener("mousemove", (evnet) => {
    const x = evnet.clientX;
    const y = evnet.clientY;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px ,${
      y - targetHalfHeight
    }px)`;
    tag.innerHTML = `${x}px, ${y}px`;
    tag.style.transform = `translate(${x + 20}px ,${y + 20}px)`;
  });
});
