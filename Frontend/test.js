function create_post(data){
	var url = data.url;
	url = url.split("/");
	p_id = url[url.length - 2];
	// console.log("Url : " + url + " ID : " + p_id);


	// Main post
	var post = document.createElement("div");
	post.classList.add("row","post");
	// First Row
	var f_row = document.createElement("div");
	f_row.classList.add("row","h-75","w-100");
	// First row FIrst column 
	var frfc = document.createElement("div");
	frfc.classList.add("col-6");
	var img = document.createElement("img");
	img.setAttribute("src",data.image);
	img.setAttribute("class","img-thumbnail");
	img.setAttribute("style","height: 10rem;width: 10rem");
	frfc.appendChild(img);

	// First row Second Column
	var frsc = document.createElement("div");
	frsc.classList.add("col-6");
	var username = document.createElement("h1");
	username.innerHTML = data.username;
	frsc.appendChild(username);
	var caption = document.createElement("p");
	caption.innerHTML = data.caption;
	frsc.appendChild(caption);
	var reach = document.createElement("h2");
	reach.innerHTML = "Reach : " +  data.reach;
	frsc.appendChild(reach);

	var cb = document.createElement("input");
	cb.type = "checkbox";
	cb.id = p_id;
	cb.classList.add("checkbox");

	var label = document.createElement('label');
	label.htmlfor = data.p_id;
	label.appendChild(document.createTextNode("Include it in the Report"));
	frsc.appendChild(label);
	frsc.appendChild(cb);

	f_row.appendChild(frfc);
	f_row.appendChild(frsc);
	//Second Column
	var s_row = document.createElement("div");
	s_row.setAttribute("class" ,"row w-100 d-flex flex-row justify-content-around");
	//Components 
	var c1 = document.createElement("div");
	c1.classList.add("col-3");
	c1.innerHTML = "Like :" + data.like_count;

	var c2 = document.createElement("div");
	c2.classList.add("col-3");
	c2.innerHTML = "Comment :" + data.comments_count;

	var c3 = document.createElement("div");
	c3.classList.add("col-3");
	c3.innerHTML = "Impression :" + data.impressions;

	var c4 = document.createElement("div");
	c4.classList.add("col-3");
	c4.innerHTML = "Engagement :" + data.engagement;
	
	s_row.appendChild(c1);
	s_row.appendChild(c2);
	s_row.appendChild(c3);
	s_row.appendChild(c4);

	post.appendChild(f_row);
	post.appendChild(s_row);
	
	var root = document.getElementById("root");
	root.appendChild(post);

}

// function make_report(){
// 	var x = document.getElementById("report");
// 	r_name = x.elements["r_name"].value;
// 	r_hash = x.elements["r_hash"].value;
// 	var impr = 0;
// 	var reach = 0;
// 	var engage = 0; 
// 	var api_link = "http://127.0.0.1:8000/Post/";


// 	var cbs = document.getElementsByClassName("checkbox");
// 	// console.log("Checkbox :" + cbs.length)
// 	let reqHeader = new Headers();
// 	reqHeader.append('Content-Type', 'application/json');
// 	// reqHeader.append("Access-Control-Allow-Origin", "*");
// 	let initObject = {
//     method: 'GET', headers: reqHeader,
// 	};
// 	fetch("http://127.0.0.1:8000/Post/",initObject)
// 	.then(function(response){
// 		return response.json();
// 	})
// 	.then(function(data){
// 		var i = 0;
// 		for (i = 0 ; i < cbs.length ; i++){
// 		// console.log(x.id);

// 		if(cbs[i].checked == true){
// 			var info = data[i];
// 			console.log(info);
// 		}
// 	}
// 	})
// 	.catch(function(err){
// 		console.log("Something Went wrong",err);
// 	})
	
// 	console.log("Total impression : " + impr);
// 	console.log("Total reach : " + reach);
// 	console.log("Total engagement : " + engage);

// }


let reqHeader = new Headers();
	reqHeader.append('Content-Type', 'application/json');
	// reqHeader.append("Access-Control-Allow-Origin", "*");
	let initObject = {
    method: 'GET', headers: reqHeader,
	};
	fetch("http://127.0.0.1:8000/Post/",initObject)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		var i = 0;
		for ( i = 0 ; i < data.length; i++){
			create_post(data[i]);
		}
		// console.log("Length :" + data.length);
		// var mul = data.split("\n")
	})
	.catch(function(err){
		console.log("Something Went wrong",err);
	})


// var cbs = document.getElementsByClassName("checkbox");
// console.log("Checkbox :" + cbs.length)
// var x;
// for (x in cbs ){
// 	if(x.checked == true){
// 		console.log(x.id)
// 	}
// }
