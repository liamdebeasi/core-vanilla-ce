import { IonIcon } from 'ionicons/components/ion-icon.js';
import { airplane } from 'ionicons/icons';
import { addIcons } from 'ionicons';

// uncomment below to avoid URL parsing issue
/*
addIcons({
	'airplane': airplane
});
*/

customElements.define('ion-icon', IonIcon);

document.getElementById("app").innerHTML = `
	<ion-icon name="airplane"></ion-icon>
`;


