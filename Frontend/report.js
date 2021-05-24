function create_report(data){

	// Main post
	var post = document.createElement("div");
	post.classList.add("row","post");
	
 
	var c1 = document.createElement("div");
	c1.classList.add("col-4");
	c1.innerHTML = "Name :" + data.name;

	var c2 = document.createElement("div");
	c2.classList.add("col-4");
	c2.innerHTML = "Hashtag :" + data.hashtag;

	var c3 = document.createElement("div");
	c3.classList.add("col-3");
	c3.innerHTML = "Impact :" + data.impact;

	post.appendChild(c1);
	post.appendChild(c2);
	post.appendChild(c3);

	var root = document.getElementById("root");
	root.appendChild(post);
}


let reqHeader = new Headers();
	reqHeader.append('Content-Type', 'application/json');
	// reqHeader.append("Access-Control-Allow-Origin", "*");
	let initObject = {
    method: 'GET', headers: reqHeader,
	};
	fetch("http://127.0.0.1:8000/Report/",initObject)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		var i = 0;
		for ( i = 0 ; i < data.length; i++){
			create_report(data[i]);
		}
		// console.log("Length :" + data.length);
		// var mul = data.split("\n")
	})
	.catch(function(err){
		console.log("Something Went wrong",err);
	})
