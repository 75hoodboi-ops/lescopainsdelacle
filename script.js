  // Remplacer par le vrai numéro (format international sans espaces, ex. "+33100000000")
  var PHONE = { display: "01 XX XX XX XX", tel: "" };
  document.querySelectorAll("[data-phone]").forEach(function (el) { el.textContent = PHONE.display; });
  document.querySelectorAll("[data-phone-link]").forEach(function (a) {
    if (PHONE.tel) { a.setAttribute("href", "tel:" + PHONE.tel); }
  });
