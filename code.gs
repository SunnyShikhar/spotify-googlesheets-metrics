// Spotify API <> Google Sheets

// Add custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Spotify Menu')
      .addItem('Get Audio Features','getFeatures')
      .addItem('Get Audio Analysis','getAnalysis')
      .addItem('Get Track Info','getTrack')
      .addToUi();
}


/***************************************/
// Get Audio Features

function getFeatures() {
   var service = getService();
   
   if (service.hasAccess()) {
     Logger.log("App has access.");
     
     var ss = SpreadsheetApp.getActiveSpreadsheet();
     var sheet = ss.getActiveSheet();
     var trackID = sheet.getRange(1,1).getValue();
     Logger.log(trackID);
     
     var url = "https://api.spotify.com/v1/audio-features/"+trackID;
     
     var response = UrlFetchApp.fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + service.getAccessToken()
      }
    });
     
     var result = JSON.parse(response.getContentText());
     Logger.log(JSON.stringify(result, null, 2));
     var features = JSON.stringify(result, null, 2);
     
     // clear any previous content
     sheet.getRange('A3:B20').clearContent();
     sheet.getRange('A3:A3').setValue([features]);
     
          
  } else {
    var authorizationUrl = service.getAuthorizationUrl();
    Logger.log('Open the following URL and re-run the script: %s',
        authorizationUrl);
  }
 }
 
/***************************************/
// Get Audio Analysis

function getAnalysis() {
     var service = getService();
   
   if (service.hasAccess()) {
     Logger.log("App has access.");
     
     var ss = SpreadsheetApp.getActiveSpreadsheet();
     var sheet = ss.getActiveSheet();
     var trackID = sheet.getRange(1,1).getValue();
     Logger.log(trackID);
     
     var url = "https://api.spotify.com/v1/audio-analysis/"+trackID;
     
     var response = UrlFetchApp.fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + service.getAccessToken()
      }
    });
     
     var result = JSON.parse(response.getContentText());
     Logger.log(JSON.stringify(result, null, 2));
     var features = JSON.stringify(result, null, 2);
//     
//     // clear any previous content
//     sheet.getRange('C3:D20').clearContent();
//     sheet.getRange('C3:C3').setValue([features]);
//     
          
  } else {
    var authorizationUrl = service.getAuthorizationUrl();
    Logger.log('Open the following URL and re-run the script: %s',
        authorizationUrl);
  }
}

/***************************************/
// Get Track Information

function getTrack() {
     var service = getService();
   
   if (service.hasAccess()) {
     Logger.log("App has access.");
     
     var ss = SpreadsheetApp.getActiveSpreadsheet();
     var sheet = ss.getActiveSheet();
     var trackID = sheet.getRange(1,1).getValue();
     Logger.log(trackID);
     
     var url = "https://api.spotify.com/v1/tracks/"+trackID;
     
     var response = UrlFetchApp.fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + service.getAccessToken()
      }
    });
     
     var result = JSON.parse(response.getContentText());
     Logger.log(JSON.stringify(result, null, 2));
     var features = JSON.stringify(result, null, 2);
     
     // clear any previous content
     sheet.getRange('A5:B22').clearContent();
     sheet.getRange('A5:A5').setValue([features]);
     
          
  } else {
    var authorizationUrl = service.getAuthorizationUrl();
    Logger.log('Open the following URL and re-run the script: %s',
        authorizationUrl);
  }
}
