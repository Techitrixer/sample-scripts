firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in. 
		document.getElementById("user_div").style.display = "block";
		document.getElementById("login_div").style.display = "none";

		var user = firebase.auth().currentUser;

		if(user != null){
			// display page for authorised users
		    window.location.href = "admin.html";
		}
	} 
	else {
	// No user is signed in. So dont display the page 
		document.getElementById("user_div").style.display = "none";
		document.getElementById("login_div").style.display = "block";
	}
});

function user_login(){
	var userEmail = document.getElementById("user_email").value;
	var userPass = document.getElementById("user_password").value;
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error : " + errorMessage);
	});
}

function user_logout(){
	firebase.auth().signOut();
	window.location.href = "admin_login.html";
}
