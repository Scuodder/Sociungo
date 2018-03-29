$(function(){
    
    let contain = $("#contain"),
     next = $("#post_fetch"),
     dynamicPage = $('#dynamicPage'),
     nHome = $('#nHome')
    // get AJAX request to fetch news data when page is loaded .....
    
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", function(data) {
   
    processNews(contain, data);    

    
})

    // post request to fetch user
    $.post('/cr/fetchUser', function(response) {
        console.log(response)
        $('#userFirstName').append(
            `
                ${response}
            `
        )
    } )

    // post Ajax request to fetch data when next button is clicked...
next.click(function(){

    $.post("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", {}, function(data) {
      
        processNews(contain, data);
        
})
})


nHome.click(function() {

    dynamicPage.empty();
    dynamicPage.append($(`
    <div class="row">
                    
        <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2"> 
            <div class="jumbotron">
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
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-4  " >Feed</h1>
                    <p class="lead ">No feed</p>
                </div>
            </div>
        </div>
        
    </div>
    
    `))


})

})