import { initialize } from "@ionic/core/components";
import { IonButton } from "@ionic/core/components/ion-button";

initialize();

document.documentElement.classList.add("ion-ce");

customElements.define("ion-button", IonButton);

document.getElementById("app").innerHTML = `
	<ion-button>CE Button!</ion-button>
`;