$(
    function() {
        let dynamicPage = $('#dynamicPage')
        
        // for loading profile page 
        $('#nProfile').click(function() {
            dynamicPage.empty();
            dynamicPage.append($(`
            <div class="row">
                <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2"> 
                    <div class="jumbotron ">
                        <div class="container">
                            <h1 class="display-4">Profile</h1>
                            <p class="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            `))
        })
    }
)