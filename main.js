let subscribeBtn = document.getElementById("subscribeButton");
subscribeBtn.addEventListener('click', () => {
    subscribeBtn.classList.toggle("subscribeActive");
    subscribeBtn.classList.toggle("subscribeInactive");
})