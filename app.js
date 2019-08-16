
function app() {
  pjs.defineDisplay("display", "display.json");

  display.serviceRequestForm.execute();
  pjs.query("INSERT INTO requests SET ?", { name, email, type, details });
  pjs.messageBox("Thank you! Your request was added to our system!");
}

exports.default = app;