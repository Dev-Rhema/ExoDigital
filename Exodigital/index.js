let loadMoreBtn = document.querySelector('#load-more');

let currentItem = 4;

loadMoreBtn.addEventListener('click', (e) => {
  let boxes = [...document.querySelectorAll('.cards .responsive')];

  for (var i = currentItem; i < currentItem + 4; i++) {
    boxes[i].style.cssText = `display:inline-block`;
  }
  currentItem += 4;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.cssText = `display:none`;
  }
});
