const brandsgateway = SpreadsheetApp.getActive().getSheetByName(
  "brandsgateway-inventory"
);
const grailed = SpreadsheetApp.getActive().getSheetByName("grailed-inventory");

function myFunction() {
  let link =
    "https://brandsgateway.com//wp-json/wc-brandsgateway/v1/dropshipping-catalog/?api_key=BP5J4SRL7z8w74nv4TRX&&lang=en&format=csv&download=1";

  let response = UrlFetchApp.fetch(link).getContentText();
  const brandsGatewayInventory = Utilities.parseCsv(response);
  brandsGatewayInventory.shift();

  //size formatting
  //brandsGatewayInventory category mapping

  //if row[16] (gender) === men then grailed.getRange(size column).setValues(row[26]); if row[16] === women, then grailed.getRange(exact_size column) then grailed.getRange(size column);
  const grailedInventory = brandsGatewayInventory.map((row) => [
    row[3],
    row[20],
    row[5] + " " + row[6],
    "original size on tag: " + row[26] + "\n" + row[27],
    row[17],
    row[5],
    null,
    null,
    row[26],
    null,
    null,
    null,
    row[7],
    "tags go here",
    row[13],
  ]);

  let startRow = 2;
  let startCol = 1;
  let numRows = grailedInventory.length;
  let numColumns = grailedInventory[0].length;

  // Appends data into the sheet.
  grailed
    .getRange(startRow, startCol, numRows, numColumns)
    .setValues(grailedInventory);
}
