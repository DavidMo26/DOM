function showAlert() {

    var size = document.querySelectorAll('li').length;
    for (let index = 0; index < size; index++) {
        document.querySelectorAll('li')[index].addEventListener('click', function () {
            document.getElementById("lower-div").innerHTML = document.querySelectorAll('li')[index].innerHTML;
        });
    }
}

