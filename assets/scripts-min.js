var modal=document.getElementById("modal"),button_modal=document.getElementById("open-modal"),modal_content=document.getElementById("modal-content");button_modal.onclick=function(){modal.style.display="block"},window.onclick=function(o){o.target===modal&&(modal.style.display="none")};