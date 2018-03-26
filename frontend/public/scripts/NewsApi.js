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
        if(description===null) description = "";
        if(image === null) {
            renderImg =``
        } else {
            renderImg = `<img src=${image} class = "rounded imgStyling"  ></img>`
        }

        
        container.empty();
        container.append($(`
        ${renderImg}
        <h4 class="p-2 textStyling">${title}</h4>
        <p class="lead p-2 textStyling" >${description}</p> 
        <span class="p-2"> #Source-${source}</span> <br>
        <span class="p-2"> #Author-${author}</span> <br>
        <a href=${site} class="p-2 textStyling">Visit</a> 
        
        `))
    }
