import firebase from 'firebase';

export class AuthService {
    myUser: any;

    signup(email: string, password: string,name: string, surname: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            user.user.updateProfile({
                displayName: name + ' ' + surname,
                photoURL: null
            }).then(function() {
                var displayName = user.user.displayName;
                console.log(displayName);
            }, function(error){

            });
        }) 
    }

    changeFirstLogin(toChange: any){
        firebase.database().ref('users/' + this.getActiveUser().uid + '/firstLogin').set(toChange);
    }

    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    firstLogin(){
        //second time login works
        var myCurrentUser = this.getActiveUser().uid;
        var ref = firebase.database().ref('users/' + myCurrentUser);
        var myFirstLogin;
        ref.once("value").then( (snapshot) => {
            let firstLogin = snapshot.child("firstLogin").val();
            myFirstLogin = firstLogin;
            }
        )
        return myFirstLogin;
    }

    logOut(){
        firebase.auth().signOut;
    }

    getActiveUser(){
        return firebase.auth().currentUser;
    }

    getDisplayName(){
        return firebase.auth().currentUser.displayName;
    }
}