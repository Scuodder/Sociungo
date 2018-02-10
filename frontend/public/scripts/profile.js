$(function(){
    
    let contain = $("#contain");
    let next = $("#post_fetch");
    let dynamicPage = $('#dynamicPage');
    let nProfile = $('#nProfile');
    let nHome = $('#nHome');

    // get AJAX request to fetch news data when page is loaded .....
    
    $.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", function(data) {
    console.log(data);
    
    
    // random number generator
    function random (min, max) {
        
        mi = Math.ceil(min);
        ma = Math.floor(max);
        return Math.floor(Math.random() * (ma - mi)) + mi;
    }
    
    let noOfResults = data.totalResults;
    let i = random(0, noOfResults)
    
    let title = data.articles[i].title;
    let description  =  data.articles[i].description;
    let source = data.articles[i].source.name;
    let author = data.articles[i].author;
    let site = data.articles[i].url;
    let image = data.articles[i].urlToImage ;
    if(author===null) author = 'unknown';
    if(description===null) description = "";
    
    
    contain.append($(`
    
    <img src=${image} class = "rounded p-2 " width="370px" alt="" ></img>
    <h4 class="p-2">${title}</h4>
    <p class="lead p-2" >${description}</p> 
    <span class="p-2"> #Source-${source}</span> <br>
    <span class="p-2"> #Author-${author}</span> <br>
    <a href=${site} class="p-2">Visit</a> 
    
    `))
    
})



// post Ajax request to fetch data without reloading...
next.click(function(){

    $.post("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19eb4ff1d1654a6cac5106b3087408d3", {}, function(data) {
        console.log(data);
    
    
        // random number generator
        function random (min, max) {
            
            mi = Math.ceil(min);
            ma = Math.floor(max);
            return Math.floor(Math.random() * (ma - mi)) + mi;
        }
        
        let noOfResults = data.totalResults;
        let i = random(0, noOfResults)
        
        let title = data.articles[i].title;
        let description  =  data.articles[i].description;
        let source = data.articles[i].source.name;
        let author = data.articles[i].author;
        let site = data.articles[i].url;
        let image = data.articles[i].urlToImage ;
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
                    <h1 class="display-4  " >Status</h1>
                    <p class="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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

})