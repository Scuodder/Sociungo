// used in homePage.js
$(function() {
    
function changeStatus(){
        let status = $('#status');
        let changeStatusInput = $('#changeStatusInput');
        let changeStatusButton = $('#changeStatusButton');
 

    $("body").on("click", changeStatusButton , function() {
    
    let changeStatusInputVal = changeStatusInput.val() ;
    
    $.post('/cr/changeStatus', {
        status : changeStatusInputVal
    }, function(response) {
  
    if (changeStatusInputVal!=="") {
        status.empty();
        status.append(`${response}`);
        changeStatusInput.val("");
      }
    })

    // get request to fetch status when homepage loads
    $.get('/cr/changeStatus', function(response) {
        if (response!=="") {
            status.empty();
            status.append(`${response}`);
            changeStatusInput.val("");
          }
    })  
    })
}

changeStatus();

let nHome = $('#nHome');
nHome.click(changeStatus);

})