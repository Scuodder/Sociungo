$(function(){
    
    let contain = $("#contain");
    let next = $("#post_fetch");
    let dynamicPage = $('#dynamicPage');
    let nProfile = $('#nProfile');
    let nHome = $('#nHome');
    let nSettings = $('#nSettings');

    // get AJAX request to fetch news data when page is loaded .....
    
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", function(data) {
   
    processNews(contain, data);    

    
})



// post Ajax request to fetch data when next button is clicked...
next.click(function(){

    $.post("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", {}, function(data) {
      
        processNews(contain, data);
        
})
})

// for loading profile page 
nProfile.click(function() {
    dynamicPage.empty();
    dynamicPage.append($(`
    <div class="row">
        <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2"> 
            <div class="jumbotron jumbotron-fluid  ">
                <div class="container">
                    <h1 class="display-4">Profile</h1>
                    <p class="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </div>
    </div>
    
    `))
})


nHome.click(function() {

    dynamicPage.empty();
    dynamicPage.append($(`
    <div class="row">
                    
        <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2"> 
            <div class="jumbotron jumbotron-fluid  ">
                <div class="container">
                    <h1 class="display-4">Status</h1>
                    <div id="status">
                        <p class="lead" >Add your status</p>
                    </div>
                    
                    <div class="input-group ">
                                    <div class="input-group-prepend" id="changeStatusButton">
                                        <button class="btn btn-danger"> Add status</button>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Status" id="changeStatusInput">
                    </div>

                </div>
            </div>
        </div>
    
    </div>

    <div class="row">
    
        <div class="col-12 mt-0 ml-3 mr-3 mb-3 p-2"> 
            <div class="jumbotron jumbotron-fluid  ">
                <div class="container">
                    <h1 class="display-4  " >Feed</h1>
                    <p class="lead ">No feed</p>
                </div>
            </div>
        </div>
        
    </div>
    
    `))


})
nSettings.click(function() {
    dynamicPage.empty();
    dynamicPage.append($(`
    <div class="row">
        <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2"> 
            <div class="jumbotron jumbotron-fluid  ">
                <div class="container">
                    <h1 class="display-4">Settings</h1>
                    <p class="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </div>
    </div>
    
    `))
})







})