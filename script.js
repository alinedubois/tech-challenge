const message ="Merci pour votre message à la Famille Royale.Nous vous répondrons dans les meilleurs délais";

document.getElementById("formulaire").addEventListener('submit', function (event) {
    event.preventDefault();
    alert(message);
});

