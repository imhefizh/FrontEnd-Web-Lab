const shareBtnMobile = document.getElementsByClassName("share-btn-mobile");
const shareBarMobile = document.getElementsByClassName("share-mobile");
const shareBtnDesktop = document.getElementsByClassName("share-btn-desktop");
const shareBarDesktop = document.getElementsByClassName("share-desktop");

shareBtnMobile[0].addEventListener("click", (e) => {
  shareBarMobile[0].classList.toggle("hidden");
});
shareBtnDesktop[0].addEventListener("click", (e) => {
  shareBarDesktop[0].classList.toggle("hidden");
});
