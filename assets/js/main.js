//scroll to top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
document.getElementById('myBtn').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// show header on mobile
var header = document.getElementById('header');
var menu = document.getElementById('mobile-menu');
var headerHight = header.clientHeight;

menu.onclick = function () {
    var isClose = header.clientHeight === headerHight;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (events) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            events.preventDefault();
        } else {
            header.style.height = null;

        }
    }
}

//  buy ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTicket() {
    modal.classList.add('modal-open')
}
function hideBuyTicket() {
    modal.classList.remove('modal-open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
modalClose.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})