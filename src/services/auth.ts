import firebase from 'firebase';

export class AuthService {
    signup(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            firebase.database().ref('users/' + user.user.uid + '/firstLogin').set(0);
            console.log(user)}).catch(error => 
            console.log(error));
    }

    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    firstLogin(){
        var myUser = this.getActiveUser();
        var firstLogin = firebase.database().ref('users/' + myUser + '/firstLogin').on;
        return firstLogin;
    }

    logOut(){
        firebase.auth().signOut;
    }

    getActiveUser(){
        firebase.auth().currentUser;
    }
}