/** use to add our script to the Steam Community Market page */

var s = document.createElement('script');

// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('steamRecent.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);


$(document).ready(function(){
    setInterval(function(){
         var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('class', 'steamjson');
        s.setAttribute('time', $.now());
        s.innerHTML = "takeInData('hello gordon');";


        (document.head||document.documentElement).appendChild(s);

    },5000);
});
