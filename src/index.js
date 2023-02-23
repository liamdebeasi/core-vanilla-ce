import { initialize, modalController } from "@ionic/core/components";
import { defineCustomElement as defineIonModal } from '@ionic/core/components/ion-modal.js';
initialize();

document.documentElement.classList.add("ion-ce");
defineIonModal();

document.getElementById("app").innerHTML = `
	<button>Open Modal</button>
`;

class AppComponent extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = 'Modal Content';
	}
}

customElements.define('app-component', AppComponent);

const btn = document.querySelector('button');
btn.onclick = () => {
	modalController.create({ component: 'app-component' }).then((modal) => modal.present());
}
