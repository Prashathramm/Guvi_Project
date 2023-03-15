function check() {
    const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const userDetails = JSON.parse(localStorage.getItem('userDetails'));
	if (!userDetails || userDetails.username !== username || userDetails.password !== password) {
		alert('Invalid username or password.');
        window.location= 'index.html';
	} else {
        window.location = 'user.html';
    }
}
