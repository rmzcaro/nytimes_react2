// routes

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/scrape", function (req, res) {
    // first we grab the body of the html with the request
    axios.get("http://www.techcrunch.com").then(function (response) {
        // then we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        // console.log(response.data + "on line 46");
        let stories = $(".post-block");
        // console.log(stories + "on line 48");
        // load text of stories
        stories.each(function (i, story) {
            let eachStory = {
                    headline : $(story).children(".post-block__header").children(".post-block__title").text().trim(),
                    url : $(story).children(".post-block__header").children(".post-block__title").children(".post-block__title__link").attr("href"),
                    summary : $(story).children(".post-block__content").text().trim(),
                    photo : $(story).children(".post-block__footer").children().children().children("img").attr("src")
            }
            // console.log(eachStory + "on line 57");
            // create news article in news collections
            db.Article.create(eachStory)
            .catch(function(err){
                console.log(err)
            });
        });
    // scrape notice here
    res.status(200).end();
    });
  
});

// route post 

// route delete 

// route get will load single HTML page