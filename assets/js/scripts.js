var modal = document.getElementById('modal');
var button_modal = document.getElementById('open-modal');
var modal_content = document.getElementById('modal-content');

button_modal.onclick = function () {
    modal.style.display = "block";
};

window.onclick = function (event) {
    if (event.target === modal) {
        // modal.style.animation = "fadeOut 0.2s 1 cubic-bezier(0.6, 0.01, 0.13, 1.01)"
        // modal_content.style.animation = "flyOutDown .5s 1 cubic-bezier(0.6, 0.01, 0.13, 1.01";
        modal.style.display = "none";
    }
};