import { initialize } from "@ionic/core/components";
import { alertController } from '@ionic/core/components';
import { IonApp } from '@ionic/core/components/ion-app.js';

initialize();
customElements.define('ion-app', IonApp);
document.documentElement.classList.add("ion-ce");

document.getElementById("app").innerHTML = `
	<ion-app>
		<button>click me</button>
	</ion-app>
`;

const button = document.querySelector('button');
button.onclick = () => {
	alertController.create({
		title: 'My Title'
	}).then(alert => {
		console.log('created alert', alert);
		alert.present();
	})
}
console.log('alert',alertController)