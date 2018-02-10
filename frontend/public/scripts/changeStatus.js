$(function() {
    
function changeStatus(){
        let status = $('#status');
    let changeStatusInput = $('#changeStatusInput');
    let changeStatusButton = $('#changeStatusButton');
 

    $("body").on("click", changeStatusButton , function() {
    
    let changeStatusInputVal = changeStatusInput.val(); 
     
      
    if (changeStatusInputVal!=="") {
        status.empty();
        status.append($(`<p class="lead">${changeStatusInputVal}</p>`));
        changeStatusInput.val("");
      }
      
      
    })
}

changeStatus();

let nHome = $('#nHome');
nHome.click(changeStatus);

})