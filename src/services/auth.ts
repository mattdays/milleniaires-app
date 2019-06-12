import firebase from 'firebase';
import {Http} from '@angular/http';

export class AuthService {
    myUser: any;
    numConnections: number;
    numGroups: number;

    signup(email: string, password: string,name: string, surname: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            user.user.updateProfile({
                displayName: name + ' ' + surname,
                photoURL: null,
            }).then(function() {
                var displayName = user.user.displayName;
                firebase.database().ref('users/' + user.user.uid + '/numConnections').set(0);
                firebase.database().ref('users/' + user.user.uid + '/numGroups').set(0);
                // firebase.database().ref('users/' + user.user.uid + '/connections').set(0);
                // firebase.database().ref('users/' + user.user.uid + '/groups').set(0);
                firebase.database().ref('users/' + user.user.uid + '/firstName').set(name);
                firebase.database().ref('users/' + user.user.uid + '/lastName').set(surname);
                firebase.database().ref('users/' + user.user.uid + '/email').set(email);
            }, function(error){

            });
        }) 
    }
s
    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    // firstLogin(){
    //     //second time login works
    //     var myCurrentUser = this.getActiveUser().uid;
    //     var ref = firebase.database().ref('users/' + myCurrentUser);
    //     var myFirstLogin;
    //     ref.once("value").then( (snapshot) => {
    //         let firstLogin = snapshot.child("firstLogin").val();
    //         myFirstLogin = firstLogin;
    //         }
    //     )
    //     return myFirstLogin;
    // }

    logOut(){
        firebase.auth().signOut;
    }

    returnMyUser(){
        return this.myUser;
    }

    getActiveUser(){
        return firebase.auth().currentUser;
    }

    getDisplayName(){
        return firebase.auth().currentUser.displayName;
    }

    getNumGroups(){

    }
}