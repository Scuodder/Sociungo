$(function(){
    
    let contain = $("#contain");
    let next = $("#post_fetch");
    let dynamicPage = $('#dynamicPage');
    let nProfile = $('#nProfile');
    let nHome = $('#nHome');
    let nSettings = $('#nSettings');

   // random number generator
   function random (min, max) {
            
    let mi = Math.ceil(min);
    let ma = Math.floor(max);
    return Math.floor(Math.random() * (ma - mi)) + mi;
}

    function processNews(data) {
        let noOfResults = data.totalResults,
        i = random(0, noOfResults),
        title = data.articles[i].title,
        description  =  data.articles[i].description,
        source = data.articles[i].source.name,
        author = data.articles[i].author,
        site = data.articles[i].url,
        image = data.articles[i].urlToImage;


        if(author===null) author = 'unknown';
        if(description===null) description = "";
        
        contain.empty();
        contain.append($(`
        
        <img src=${image} class = "rounded p-2 " width="370px" alt="" ></img>
        <h4 class="p-2">${title}</h4>
        <p class="lead p-2" >${description}</p> 
        <span class="p-2"> #Source-${source}</span> <br>
        <span class="p-2"> #Author-${author}</span> <br>
        <a href=${site} class="p-2">Visit</a> 
        
        `))
    }

    // get AJAX request to fetch news data when page is loaded .....
    
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", function(data) {
   
    processNews(data);    

    
})



// post Ajax request to fetch data without reloading...
next.click(function(){

    $.post("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", {}, function(data) {
      
        processNews(data);
        
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
                                        <button class="btn btn-primary"> Add status</button>
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
                    <p class="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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