// create a new account
$(function(){
    
    let errorContainer = $('#errors')

  
    // createAccount

    document.getElementById('createAccount').addEventListener('click', function(e) {
        $.post (
            '/cr/createAccn', 
            {
                firstName : $('#firstName').val(),
                lastName : $('#lastName').val(),
                emailAddress : $('#emailAddress').val(),
                password : $('#password').val(),
                confirmPassword: $('#confirmPassword').val(),
                birthday : $('#birthday').val() ,

            }, function(data) {
              console.log(data)

              if( data.status === '1'){
                let errors = data.errors;
                errorContainer.empty();
             
                
                for( let prop in errors) {
                 
                errorContainer.append($(`
                <div class="form-row">
                    <div class="col alert alert-danger">
                        ${errors[prop].msg}
                    </div>   
                </div>
            
                
                `))
                
                }
              } else {
                  if (data.status === '2'){
                    errorContainer.empty();
                    errorContainer.append($(
                        `
                          <div class="form-row">
                              <div class="col alert alert-success">
                                  ${data.message}
                              </div>   
                          </div> 
                        `
                    ))

                  } else if (data.status === '3') {
                      errorContainer.empty();
                      errorContainer.append($(
                          `
                            <div class="form-row">
                                <div class="col alert alert-danger">
                                    ${data.error.msg}
                                </div>   
                            </div> 
                          `
                      ))
                  }
              }
       
              
                
            }
        )
        e.preventDefault();
    })



    

})
