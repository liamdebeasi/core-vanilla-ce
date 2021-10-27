import { initialize, alertController } from "@ionic/core/components";
import { IonButton } from "@ionic/core/components/ion-button";

initialize();

document.documentElement.classList.add("ion-ce");

customElements.define("ion-button", IonButton);

document.getElementById("app").innerHTML = `
	<ion-button>CE Button!</ion-button>
`;

const button = document.querySelector('ion-button');
button.addEventListener('click', () => {
	console.log('Creating alert...')
	alertController.create({
		header: 'Alert',
		message: 'Hello World!',
		buttons: ['Ok']
	}).then((alert) => {
		console.log('Alert created!', alert)
		alert.present();
	})
});