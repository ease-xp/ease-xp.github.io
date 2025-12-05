function loadNavbar(navbarPath, basePath) {
  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Adjust links based on the basePath
      // Ensure basePath ends with / if it's not empty and not just a filename (though usually it's './' or '../')
      // Actually, if basePath is just empty string, we don't need to do anything.
      // If basePath is '../', we prepend it.
      
      if (basePath) {
        document.querySelectorAll('.navbar-nav a').forEach(link => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            link.setAttribute('href', basePath + href);
          }
        });

        const brandLink = document.querySelector('.navbar-brand');
        if (brandLink) {
           const href = brandLink.getAttribute('href');
           if (href && !href.startsWith('http') && !href.startsWith('#')) {
             brandLink.setAttribute('href', basePath + href);
           }
        }
      }

      // Initialize dropdowns (logic extracted from navbar.html)
      initializeNavbarBehavior();
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function initializeNavbarBehavior() {
    console.log(document.location.href);
    // 获取所有dropdown触发器
    var dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function (e) {
        // 如果在移动视图中
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();

          // 切换当前下拉菜单
          var dropdownMenu = this.nextElementSibling;
          var isOpen = dropdownMenu.classList.contains('show');

          // 关闭所有其他打开的下拉菜单
          document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
            if (menu !== dropdownMenu) {
              menu.classList.remove('show');
              menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            }
          });

          // 切换当前菜单
          dropdownMenu.classList.toggle('show');
          this.setAttribute('aria-expanded', !isOpen);
        }
      });
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
          menu.classList.remove('show');
          menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
      }
    });
}
