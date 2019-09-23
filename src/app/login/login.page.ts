import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
/*
import {UserConfigStorageService} from '../services/user-config-storage.service';
import {NavigationService} from '../services/navigation.service';
import {RestService} from '../services/rest.service';
*/

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private router: Router,
        private alertController: AlertController,   // TODO: remove this after all alerts are removed
        private toastController: ToastController,
        /*
        private userConfigStorageService: UserConfigStorageService,
        private navigationService: NavigationService,
        private restService: RestService
        */
    ) {
    }

    ngOnInit() {
    }

    /*
    // perform google/facebook login
    async login() {

        let userConfigFromLocalStorage;

        // TODO: code here for google/facebook login
        const emailId = this.getLoginInfoFromVendor().emailId;

        console.log('Getting info from local storage');

        // get userInfo from local storage
        userConfigFromLocalStorage = await this.userConfigStorageService.getUserConfigFromLocalStorage(emailId);

        console.log('Got info from local storage. userConfigFromLocalStorage:', userConfigFromLocalStorage);

        if (userConfigFromLocalStorage.localData.phoneData.phoneType) {
            this.navigationService.navigateToPhoneTypePage(userConfigFromLocalStorage.phoneType);
            return;
        }

        // get config for this emailId from server
        const serverData = this.restService.getServerData(emailId);

        // check if this is a new user
        if (!serverData.isRegistered) {
            this.registerNewUser();
            return;
        }

        // update local storage with serverData
        await this.userConfigStorageService.updateServerDataInLocalStorage(emailId, serverData);

        // TODO: this retrieval is not required, delete it
        userConfigFromLocalStorage = await this.userConfigStorageService.getUserConfigFromLocalStorage(emailId);
        console.log('2 Got info from local storage. userConfigFromLocalStorage:', userConfigFromLocalStorage);

        // GoTo PhoneSelector Page
        console.log('Navigate to PhoneSelector page');
        this.navigationService.navigateToSelecterPage(serverData.emailId, serverData.phones);
    }

    async showMessage(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });

        toast.present();
    }


    // TODO: implement this
    getLoginInfoFromVendor() {
        return {
            emailId: 'aneezbacker@gmail.com'
        };
    }

    registerNewUser() {
        this.router.navigate(['/registeration']);
    }

    async customAlert(msg) {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: msg,
            buttons: ['OK']
        });

        await alert.present();
    }

   */
}
