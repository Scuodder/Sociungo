//  used in profile.js
    // random number generator
   function random (min, max) {
            
    let mi = Math.ceil(min);
    let ma = Math.floor(max);
    return Math.floor(Math.random() * (ma - mi)) + mi;
}

    function processNews(container, data) {
        let noOfResults = data.totalResults,
        i = random(0, noOfResults),
        title = data.articles[i].title,
        description  =  data.articles[i].description,
        source = data.articles[i].source.name,
        author = data.articles[i].author,
        site = data.articles[i].url,
        image = data.articles[i].urlToImage,renderImg;
        

        if(author === null) author = 'unknown';
        if(description === null) description = "";
        if(image === null) {
            renderImg =``
        } else {
            renderImg = `<img src=${image} class = "rounded imgStyling"  ></img>`
        }

        
        container.empty();
        container.append($(`
        ${renderImg}
        <h4 class="p-2 mt-3 bg-light rounded text-dark">${title}</h4>
        <div class = "bg-light mb-2 rounded text-dark">
            <p class="lead p-2 m-0 text-dark" >${description}</p> 
        </div>
        <div class = "bg-light mb-2 p-2 rounded">
            <span class="lead text-dark "> #Source-${source}</span> </br>
            <span class="lead text-dark"> #Author-${author}</span> </br>
        </div>
        <a href=${site} class="px-2 py-1 bg-info rounded text-light">Visit</a>
        `))
    }
