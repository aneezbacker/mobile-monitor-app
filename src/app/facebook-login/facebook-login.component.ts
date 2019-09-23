import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';


@Component({
    selector: 'app-facebook-login',
    templateUrl: './facebook-login.component.html',
    styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent implements OnInit {

    loading: any;

    permissions = ['public_profile', 'email'];

    constructor(
        private router: Router,
        private fb: Facebook,
        private fireAuth: AngularFireAuth,
        public loadingController: LoadingController
    ) {
    }

    async ngOnInit() {
        this.loading = await this.loadingController.create({
            message: 'Connecting ...'
        });
    }


    async presentLoading(loading) {
        await loading.present();
    }

    async login() {
        // open facebook native widget for login
        this.fb.login(this.permissions)
            .then((fbLoginResponse: FacebookLoginResponse) => {
                // on successful facebook login
                alert('fbLoginResponse:' + JSON.stringify(fbLoginResponse));
                this.onLoginSuccess(fbLoginResponse);
            }).catch((error) => {
            // on facebook login failure
            this.onLoginError(error);
        });
    }

    onLoginSuccess(fbLoginResponse: FacebookLoginResponse) {
        // const { token, secret } = res;
        alert('onLoginSuccess');
        const fbCredential = firebase.auth.FacebookAuthProvider.credential(fbLoginResponse.authResponse.accessToken);

        // sign-in to firebase
        this.fireAuth.auth.signInWithCredential(fbCredential)
            .then(response => {

                let currentUser = firebase.auth().currentUser;
                alert('currentUser:' + JSON.stringify(currentUser));


              //  alert('navigating');
            //    this.router.navigate(['/master-phone']);
          //      this.loading.dismiss();
            });





        // get email
        //alert('get user.email');

        /*
        this.fb.api('/me', this.permissions)
            .then(user => {
                alert('user.email:' + user.email);
                alert('user:' + JSON.stringify(user));
            });
        */

    }

    onLoginError(err) {
        console.log('Facebook login failed.', err);
        alert('Facebook login failed.' + err);
    }
}
