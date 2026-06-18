const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";

const SHEETS = {
  gym: "Gym Leads",
  salon: "Salon Leads",
  restaurant: "Restaurant Leads",
  realestate: "Real Estate Leads",
  tuition: "Tuition Leads",
};

const HEADERS = [
  "Timestamp",
  "Template",
  "Business Name",
  "Name",
  "Email",
  "Phone",
  "Subject",
  "Message",
  "Source Page",
];

function getLeadSheet(template) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheetName = SHEETS[template] || "Website Leads";
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        error: "No form data received. Submit the website form or run testDoPost instead."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const data = JSON.parse(e.postData.contents);
  const sheet = getLeadSheet(data.template);

  sheet.appendRow([
    new Date(),
    data.template || "",
    data.businessName || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.subject || "",
    data.message || "",
    data.sourcePage || "",
  ]);

  SpreadsheetApp.flush();

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function testDoPost() {
  return doPost({
    postData: {
      contents: JSON.stringify({
        template: "gym",
        businessName: "Demo Gym",
        name: "Test Member",
        email: "test@example.com",
        phone: "0712345678",
        subject: "Free trial",
        message: "Testing the website form",
        sourcePage: "/templates/gym",
      }),
    },
  });
}

function testWriteAllSheets() {
  Object.keys(SHEETS).forEach(function(template) {
    doPost({
      postData: {
        contents: JSON.stringify({
          template: template,
          businessName: "Demo " + template,
          name: "Direct Test Lead",
          email: "direct-test@example.com",
          phone: "0712345678",
          subject: "Direct write test",
          message: "Direct write test from Apps Script",
          sourcePage: "/templates/" + template,
        }),
      },
    });
  });
}
