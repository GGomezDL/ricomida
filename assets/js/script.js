var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

$(document).ready(function () {
    $("#enviar-correo").on('click', function () {
        alert("El correo fue enviado correctamente...");
    });
});


$(document).ready(function () {
    $(".change-color").dblclick(function () {
        $(this).css({
            "color": "red",
        });
    });
});

$(document).ready(function () {
$("img").click(function(){
    $("p").toggle();
});
});
