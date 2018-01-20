# Image Search Abstraction Layer
## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:

```text
https://isal-0.glitch.me/imagesearch/lolcats%20funny?offset=10 
https://isal-0.glitch.me/history
```

## Example query output:

```js
[{
        url: "http://www.innocentenglish.com/funny-pics/lolcats/funny-cat-swimmingin-styro.jpg",
        snippet: "Hilarious Lolcats 13: Really Funny Kitten lolcat Pictures",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.Yo59-2O09Xi7xzIuRx6SKAHaGJ&pid=Api",
        context: "http://www.innocentenglish.com/funny-amazing-pictures-videos/cute-kitten-puppy-animal-pics/lolcats-macros/cute-kitten-pictures.html"
    },
    {
        url: "http://viralviralvideos.com/wp-content/uploads/2011/06/lolcats_funny.jpg",
        snippet: "LOLCats",
        thumbnail: "https://tse4.mm.bing.net/th?id=OIP.Cvv9cgIuPIEfENUWAQ7lXAHaFw&pid=Api",
        context: "https://www.viralviralvideos.com/2011/06/17/lolcats-2/"
    },
    {
        url: "http://www.innocentenglish.com/funny-pics/lolcats/cute-cat-pic.jpg",
        snippet: "Best Lolcats 4: More cute funny kitty lolcat pictures",
        thumbnail: "https://tse2.mm.bing.net/th?id=OIP.qxmsInPI6d7ST8mdhUGylQHaJ4&pid=Api",
        context: "http://www.innocentenglish.com/funny-amazing-pictures-videos/cute-kitten-puppy-animal-pics/lolcats-macros/cute-kitty-pics4.html"
    },
    {
        url: "http://stuffpoint.com/lol-cats/image/29154-lol-cats-invisible-snow-shovel.jpg",
        snippet: "Crazy for Young Adult Books - ARCHIVES: Funny Pictures and ...",
        thumbnail: "https://tse3.mm.bing.net/th?id=OIP.2qYZcRFvfsTRCPaGBra6KAEsDh&pid=Api",
        context: "http://www.goodreads.com/topic/show/1270602-funny-pictures-and-videos"
    },
    {
        url: "http://qcart.files.wordpress.com/2011/05/lolcats-funny-pictures-halp-not-for-sale.jpg",
        snippet: "LOLcats | qcart",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.bNDz_DuI1bO6h1CNVzjrRwDhEs&pid=Api",
        context: "http://qcart.wordpress.com/2011/05/17/lolcats/"
    },
    {
        url: "http://images2.fanpop.com/images/photos/2900000/LOL-CATS-lol-cats-2985219-772-726.jpg",
        snippet: "lol cats images LOL CATS wallpaper photos (2985219)",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.6MUVS6nUDklrvhVnPyX9oQHaG9&pid=Api",
        context: "http://www.fanpop.com/clubs/lol-cats/images/2985219/title/lol-cats-photo"
    },
    {
        url: "http://3.bp.blogspot.com/-voh0hZKJ5VI/UM5AtJJDOVI/AAAAAAAAPIs/7uWQEvOC7TQ/s1600/i-love-you-lamp-funny-lolcat-cute-fun-lovely.png",
        snippet: "I love you lamp",
        thumbnail: "https://tse3.mm.bing.net/th?id=OIP.7xAicxO8FmNtvo2GrV9koQHaF_&pid=Api",
        context: "http://feeds.feedburner.com/FunnyCatPics"
    },
    {
        url: "http://www.innocentenglish.com/funny-pics/lolcats/funny-cat-riding-a-bike.jpg",
        snippet: "Invisible Lolcats: Funny captioned cat pics with invisible ...",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.VjeRjNIrgAvbvKm-eGtpggHaFV&pid=Api",
        context: "http://www.innocentenglish.com/funny-amazing-pictures-videos/cute-kitten-puppy-animal-pics/lolcats-macros/funny-captioned-cat-pics.html"
    },
    {
        url: "http://cdn.smosh.com/sites/default/files/legacy.images/smosh-pit/122010/lolcat-thermometer.jpg",
        snippet: "30 Best LOLcats Ever | SMOSH",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.8yaYby241UfrdGBUB4I11QHaFi&pid=Api",
        context: "http://www.smosh.com/smosh-pit/photos/30-best-lol-cats-ever"
    },
    {
        url: "http://4.bp.blogspot.com/_b3GHoGMBNpY/TSIoAGmKgrI/AAAAAAAAFGs/krY10VMMlyA/s1600/LOLCats10.png",
        snippet: "LOLCats",
        thumbnail: "https://tse1.mm.bing.net/th?id=OIP.U6yTUhsFRZzOGVZA2KByWQHaFf&pid=Api",
        context: "http://funnylolcats.blogspot.com/"
    }
]
```

## Example latest output:

```js
[{
        term: "google",
        when: "2018-01-20T18:17:50.691Z"
    },
    {
        term: "github",
        when: "2018-01-20T18:01:02.541Z"
    },
    {
        term: "apple",
        when: "2018-01-20T17:57:22.944Z"
    },
    {
        term: "test",
        when: "2018-01-20T17:45:51.819Z"
    },
    {
        term: "netflix",
        when: "2018-01-20T17:43:46.863Z"
    },
    {
        term: "litecoin",
        when: "2018-01-20T17:43:14.063Z"
    },
    {
        term: "blockchain",
        when: "2018-01-20T17:40:27.136Z"
    },
    {
        term: "cs50",
        when: "2018-01-20T17:40:22.937Z"
    },
    {
        term: "strings",
        when: "2018-01-20T17:26:43.897Z"
    },
    {
        term: "apple",
        when: "2018-01-20T17:23:42.818Z"
    }
]
```
