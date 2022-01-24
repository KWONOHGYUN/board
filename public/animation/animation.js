let underbar = $('#underbar');
let navMenus = $('.nav a');
console.log(navMenus);

navMenus.click((menu) => slideunderbar(menu))

function slideunderbar(menu) {
    underbar.css('left', `${menu.currentTarget.offsetLeft}`+`px`);
    underbar.css('width', `${menu.currentTarget.offsetWidth}`+`px`);
    underbar.css('top', `${menu.currentTarget.offsetTop+menu.currentTarget.offsetHeight}`+`px`);
}