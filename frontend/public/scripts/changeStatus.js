// used in homePage.js
$(function() {
    
function changeStatus(){
        let status = $('#status');
        let changeStatusInput = $('#changeStatusInput');
        let changeStatusButton = $('#changeStatusButton');
 

    $("body").on("click", changeStatusButton , function() {
    
    let changeStatusInputVal = changeStatusInput.val() ;
    
    if (changeStatusInputVal!=="") {
        $.post('/cr/changeStatus', {
        status : changeStatusInputVal
    }, function(response) {
         status.empty();
        status.append(`${response}`);
        changeStatusInput.val("");
    })
 
    }

   
    })
    // post request to fetch status when homepage loads
    $.post('/cr/loadStatus',{},function(response) {
        if (response!=="") {
            status.empty();
            status.append(`${response}`);
            changeStatusInput.val("");
          }
    })  

}

changeStatus();

let nHome = $('#nHome');
nHome.click(changeStatus);

})