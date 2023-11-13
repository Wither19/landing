     const = misc;
     const = miscbutton;
     misc = document.getElementById('miscellaneous');
     miscbutton = document.getElementById('miscbutton');
     function miscshow() {
        misc.style.visibility = 'visible'; 
        misc.style.width = 'auto';
        misc.style.height = 'auto';
        misc.style.opacity = '1';
        miscbutton.addEventListener('click', misccollapse);
        miscbutton.removeEventListener('click', miscshow);
}
    function misccollapse() {
        misc.style.visibility = 'hidden'; 
        misc.style.width = '0px';
        misc.style.height = '0px';
        misc.style.opacity = '0';
        miscbutton.addEventListener('click', miscshow);
        miscbutton.removeEventListener('click', misccollapse);
}
