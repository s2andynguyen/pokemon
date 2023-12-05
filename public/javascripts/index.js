var menus = document.querySelectorAll('.menu');
var bannerLogin = document.querySelector('.banner-login');
var appContent = document.querySelector('.app-content');
var userLogined = document.querySelector('.user-logined');
var userHandle = document.querySelector('.user-handle');

menus.forEach(menu => {
    menu.onclick = function(){
        console.log(subMenu);
        var subMenu = menu.querySelector('.sub-menu')
        if(subMenu){
            subMenu.classList.toggle('hide')
        }
    }
})

function chuyenTrang(newPage, id) {
    if (newPage && id) {
        window.location.href = `${newPage}/${id}`;
    } else if (newPage){
        window.location.href = newPage;

    }
}


// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


