const starContainers = document.querySelectorAll(".star-item");

const starIcon = '<img src="./images/icon-star.svg" alt="Star Icon" />';

starContainers.forEach(container => {
  const stars = starIcon.repeat(5);
  container.innerHTML = stars + container.innerHTML;
});