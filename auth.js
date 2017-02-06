function logpass(login, password){
	if(login === 'login' && password === 'password'){
		return 'You were logged in';
	}
	else{
		return 'Login in incorrect';
	}
}

logpass(tolik, 123456);
logpass(mary, 00000);