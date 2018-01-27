// create a new account
$(function(){
    let createAccn = $('#createAccn')
    
  
    createAccn.click(function(){
    $.get('/createAccount', function(data){
        window.location.replace(window.location.href + 'createAccount')
    })
  })
}
  
  
)
