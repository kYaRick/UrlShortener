const downArrow = document.querySelector(".down_arrow");
downArrow.addEventListener("click", function () {
  const hiddenComments = document.querySelectorAll(".comment.hidden");
  for (let i = 0; i < hiddenComments.length; i++) {
    hiddenComments[i].classList.remove("hidden");
  }
});
