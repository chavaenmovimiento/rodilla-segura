const SHEET_ID = '1XZ4RM1-_pAHWWY-HYvbk9A5Z7pfE3t3ooXLdLpZtO8c';
const SHEET_NAME = 'Hoja 1';

function doGet() {
  return ContentService
    .createTextOutput('Pre-Registros Rodilla Segura - Script activo ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = parsePayload_(e);

  sheet.appendRow([
    new Date(),
    data.nombre || '',
    data.correo || data.email || '',
    data.origen || '',
    data.pagina || '',
    data.fechaCliente || ''
  ]);

  return json_({ ok: true });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  try {
    return JSON.parse(e.postData.contents);
  } catch (err) {
    return e.parameter || {};
  }
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
