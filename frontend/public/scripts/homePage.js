$(function(){
    
    let contain = $("#contain"),
     next = $("#post_fetch"),
     dynamicPage = $('#dynamicPage'),
     nHome = $('#nHome')
    // get AJAX request to fetch news data when page is loaded .....
    
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", function(data) {
   
        processNews(contain, data);    
    })

    // post request to fetch user when the page loads
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
                    
    <div class="col-12 mt-0 ml-3 mr-3 mb-0 p-2 "> 
        <div class="jumbotron">
            <div class="container">
                <span class="display-4 bg-light rounded text-dark py-1 px-3" >Status</span>
                <div class="mt-3">
                    <p id="status" class="lead text-dark bg-light rounded py-3 px-3" >Add your status</p>
                </div>
                
                <div class="input-group ">
                    <div class="input-group-prepend" id="changeStatusButton">
                        <button class="btn btn-dark" >Add status</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Status" id="changeStatusInput">
                    
                    
                </div>   
                
                
                
            </div>
        </div>
    </div>
    
</div>

<div class="row">
    
    <div class="col-12 mt-0 ml-3 mr-3 mb-3 p-2"> 
        <div class="jumbotron bg-dark">
            <div class="container">
                <span class="display-4 bg-light rounded px-3 py-1 text-dark" >Feed</span>
                <p class="lead ml-1 mt-5 text-light">No feed</p>
            </div>
        </div>
    </div>
    
</div>
</div>

    
    `))


})

})