function store() {
    const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const email = document.getElementById('email').value;

	if(username === "" || password === "" || email === "") {
		console.log("came!")
		alert("Fill all the fields!")
		window.location='register.html';
	} else {
		const userDetails = {
			username: username,
			password: password,
			email: email
		};
	
		localStorage.setItem('userDetails', JSON.stringify(userDetails));
		window.location = 'index.html'
	}
}
