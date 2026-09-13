const SHEET_NAME = "Sheet1"; // Change to your active sheet tab name if different

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Append the incoming user details to your Google Sheet
    sheet.appendRow([
      data.timestamp || new Date(),
      data.action || "",
      data.role || "",
      data.name || "",
      data.email || "",
      data.license || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Data successfully stored"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}


**CODE.JS/SCRIPT.TXT