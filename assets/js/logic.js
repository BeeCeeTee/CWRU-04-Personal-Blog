const themeButtonEl = $('#theme');

let isDark = true;

themeButtonEl.on('click', function() {
    if (isDark) {
        let dark = $(':root').css({'--accent': '#F8F8F8', '--background': '#080808', '--hover': '#D0D0D0', '--submit': '#A9A9A9'});
        localStorage.setItem('dark', dark);
    }
    else {
       let light = $(':root').css({'--accent': '#080808', '--background': '#F8F8F8', '--hover': '#404040', '--submit': '#080808'});
        localStorage.setItem('light', light);
    }
    isDark = !isDark;
});
