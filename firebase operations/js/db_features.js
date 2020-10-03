// var databaseRef = firebase.database().ref('table1/');
var table1ref = firebase.database().ref().child("table1");
var table2ref = firebase.database().ref().child("table2");

table1ref.on("child_added",snap => {
	var title = snap.child("title").val();
	var message = snap.child("message").val();
	$("#table1-data").append("<h1>title : " + title + "</h1><br>message : " + message + "<br>")
});

table2ref.on("child_added",snap => {
	var title = snap.child("title").val();
	var message = snap.child("message").val();
	$("#table2-data").append("title : " + title + "<br>message : " + message + "<br>")
});


function add_to_table1(){
	var title = document.getElementById('title1').value;
	var message = document.getElementById('message1').value;

	var uid = firebase.database().ref().child('table1').push().key;

	var data = {
		user_id: uid,
		title: title,
		message: message
	}

	var updates = {};
	updates['/table1/' + uid] = data;
	firebase.database().ref().update(updates);

	reload_page();
}

function add_to_table2(){
	var title = document.getElementById('title2').value;
	var message = document.getElementById('message2').value;

	var uid = firebase.database().ref().child('table2').push().key;

	var data = {
		user_id: uid,
		title: title,
		message: message
	}

	var updates = {};
	updates['/table2/' + uid] = data;
	firebase.database().ref().update(updates);

	reload_page();
}

function reload_page(){
	window.location.reload();
}