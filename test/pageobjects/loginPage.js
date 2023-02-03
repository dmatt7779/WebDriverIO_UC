
class LoginPage{

    get userName(){
        return $("#username");
    }

    get password(){
        return $("#password");
    }

    get alertValue(){
        return $('.alert-danger');
    }

    get signInBtn(){
        return $("#signInBtn");
    }
    
    get infoToLogin(){
        return  $('p');
    }

    async login(username, password){
        await this.userName.setValue(username);
        await this.password.setValue(password);
        await this.signInBtn.click();
    }
}

const loginPageElements = new LoginPage();
export default loginPageElements;