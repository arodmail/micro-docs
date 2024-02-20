
function loadContent(target) {
    var xhr= new XMLHttpRequest();
    xhr.open('GET', target, true);

    // Set Content-Type header to HTML
    xhr.setRequestHeader('Content-Type', 'text/html');
    
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) {
            return; // or other error handling
        }  else {
            document.getElementById('main-body').innerHTML = this.responseText;
            window.scrollTo(0, 0);
        }
    };
    xhr.send();
}
