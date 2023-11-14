     const misc = document.getElementById('miscellaneous');
     const miscbutton = document.getElementById('miscbutton');
     const october = document.getElementById('dropdownoctober');
     const octoberbutton = document.getElementById('october');
     const november = document.getElementById('dropdownnovember');
     const novemberbutton = document.getElementById('november');
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
    function octshow {
        october.style.visibility = 'visible';
        october.style.width = 'auto';
        october.style.height = 'auto';
        october.style.opacity = '1';
        octbutton.addEventListener('click', octccollapse);
        octbutton.removeEventListener('click', octshow); 
}
    function octcollapse {
         october.style.visibility = 'hidden';
         october.style.width = '0px';
         october.style.height = '0px';
         october.style.opacity = '0';
         octbutton.addEventListener('click', octshow);
         octbutton.removeEventListener('click', octcollapse);
}
    function novshow {
         november.style.visibility = 'visible';
         november.style.width = 'auto';
         november.style.height = 'auto';
         november.style.opacity = '1';
         novbutton.addEventListener('click', novcollapse);
         novbutton.removeEventListener('click', novshow);
}
    function novcollapse {
         november.style.visibility = 'hidden';
         november.style.width = '0px';
         november.style.height = '0px';
         november.style.opacity = '0';
         novbutton.addEventListener('click', novshow);
         novbutton.removeEventListener('click', novcollapse);
}
