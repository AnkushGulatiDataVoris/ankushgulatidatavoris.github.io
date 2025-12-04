function doGet() {
  return HtmlService.createHtmlOutputFromFile("form")
    .setTitle("Diagnostic Form")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitData(data) {
  const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Sheet1");

  const row = [
    new Date(),
    data.name,
    data.email,
    data.phone,
    ...data.scores
  ];

  sheet.appendRow(row);
  return "success";
}
