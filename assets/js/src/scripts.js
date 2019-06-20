const posts = (function () {
    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";

    return{
        getPosts: function(){
            fetch(url)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(
                        function (data) {
                            var blogWrapper = document.getElementById("demo");
                            var allPosts = data.map(item => {
                                var capitalLetter = item.title.charAt(0).toUpperCase();
                                var title = `<h2 class='blog-post-title'>${capitalLetter + item.title.slice(1)}</h2>`;
                                var body = `<p>${item.body}</p>`;
                                var meta = `<p class='blog-post-meta'>Post #${item.id}</p>`
                                var blogPost = `<div class='blog-post'>${title + meta + '<hr/>' + body + body + body + body}</div>`;
                                return blogPost;
                                // console.log("item => ", item.title)
                            })
                                .slice(0, 4)
                                .join("");
                            blogWrapper.innerHTML = allPosts;
                            // console.log("data => ", data);
                        }
                    )
            }
        });
        }
    }


    


/* function reqListener() {
    this.responseText;
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs", true);
oReq.send(); */

}())
const search = (function(){
    return {
        openSearch: function(){
            document.querySelector('#searchLink')
                .addEventListener("click", () => {
                    let form = document.querySelector("#searchBox > div");
                    let intput = document.querySelector("#searchBox > div > input");
                    let submitSearch = document.querySelector("#submitSearch");
                    form.style.display = "block";
                    input.focus();
                });
        }
    }
}())

search.openSearch();
posts.getPosts();
