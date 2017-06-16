console.log("Well at least the JS is linked!", );


let blogPosts = document.getElementById('blog-entries')

let week1 = "Week one reflection and description and stuff";
let week2 = "Week two reflection and description and stuff";
let week3 = "Week three reflection and description and stuff";

postsArray = [week1, week2, week3];
let fillEntries = '';
for (var i=1; i<postsArray.length+1; i++) {
	fillEntries += `<h3>Week ${[i]}</h3><article class="blog-entry">${postsArray[i-1]}</article>`
};

blogPosts.innerHTML = fillEntries;