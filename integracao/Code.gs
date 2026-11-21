function doGet() {
 const sheet = SpreadsheetApp.openById('SUBSTITUIR_PELO_ID_DA_PLANILHA_PUBLICA').getSheetByName('Ofertas');
 const rows = sheet.getDataRange().getValues(); rows.shift();
 const today = Utilities.formatDate(new Date(),'America/Sao_Paulo','yyyy-MM-dd');
 const data = rows.filter(r => String(r[8]).trim().toLowerCase()==='ativa' && r[0] && /^https:\/\//i.test(String(r[6]))).map(r => ({produto:String(r[0]),categoria:String(r[1]),plataforma:String(r[2]),preco:Number(r[3])||0,cupom:String(r[4]),imagem:String(r[5]),link:String(r[6]),validade:r[7] instanceof Date?Utilities.formatDate(r[7],'America/Sao_Paulo','yyyy-MM-dd'):String(r[7]),status:'ativa'})).filter(o=>!o.validade||(/^\d{4}-\d{2}-\d{2}$/.test(o.validade)&&o.validade>=today));
 return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}