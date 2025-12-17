(function () {
  function decodeCfEmail(cfemail) {
    if (!cfemail || cfemail.length < 4) return "";

    // Перші 2 hex-символи – ключ
    const key = parseInt(cfemail.substr(0, 2), 16);
    let email = "";

    // Далі йдуть байти символів (по 2 hex-символи)
    for (let i = 2; i < cfemail.length; i += 2) {
      const byte = parseInt(cfemail.substr(i, 2), 16) ^ key;
      email += String.fromCharCode(byte);
    }

    return email;
  }

  function processEmails() {
    const elements = document.querySelectorAll("span.__cf_email__");

    elements.forEach(function (el) {
      const cfemail = el.getAttribute("data-cfemail");
      if (!cfemail) return;

      const decoded = decodeCfEmail(cfemail);

      // Показуємо email як текст
      el.textContent = decoded;

      // Якщо span всередині <a>, то оновимо href="mailto:..."
      const parent = el.closest("a[href^='mailto:']");
      if (parent) {
        parent.setAttribute("href", "mailto:" + decoded);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processEmails);
  } else {
    processEmails();
  }
})();
