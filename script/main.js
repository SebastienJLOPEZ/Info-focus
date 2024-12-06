import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

/* Validation E-mail */
document.addEventListener("alpine:init", () => {
  Alpine.data("popupHandler", () => ({
    showModal1: true,
    showModal2: false,
    showModal3: false,
    email: "",
    isEmailValid: false,

    validateEmail() {
      if (this.isEmailValid) {
        console.log("Email valide:", this.email);
        this.showModal2 = false;
        this.showModal3 = true;
      } else {
        alert("Veuillez entrer une adresse email valide.");
      }
    },
  }));
});
