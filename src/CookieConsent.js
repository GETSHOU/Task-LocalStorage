import { COOKIE_CONSENT_KEY } from "./constants";

class CookieConsent {
    constructor(selector) {
        this.el = document.querySelector(selector);

        if (!localStorage.hasOwnProperty(COOKIE_CONSENT_KEY) && this.el) {
            console.log('constructor', this);
            this.acceptBtn = this.el.querySelector(".cookie-consent__button");
            this.acceptBtn?.addEventListener("click", this.onAccept.bind(this));
        } else {
            this.el.classList.add("hide");
        }
    }   
    onAccept() {
        console.log('onAccept with ".bind(this)"', this);
        
        localStorage.setItem(COOKIE_CONSENT_KEY, "approved");
        this.el.classList.add("hide");
        //this.acceptBtn?.removeEventListener("click", this.onAccept);
    }
}

export default CookieConsent;
