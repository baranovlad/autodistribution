function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

function createTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('renameSheet')
      .forSpreadsheet(ss)
      .onChange()
      .create();
}

function renameSheet(e) {
  var sheets = e.source.getSheets();
  if (sheets[sheets.length-1].getName().includes("Лист")) {
    sheets[sheets.length-1].setName("distribution"+String(e.source.getSheets().length-2));
    newDistribution();
  }
}

function newDistribution() {
  function createArraySettings(spreadsheet) {
    const dataSettings = spreadsheet.getSheetByName('settings').getDataRange().getValues();
    let arraySettings = [];
    for (var i = 0; i < dataSettings.length; i++) {
      arraySettings.push(dataSettings[i][1]);
    }
    return arraySettings;
  }

  function createArrayUsers(spreadsheet) {
    const dataUsers = spreadsheet.getSheetByName('users').getDataRange().getValues();
    let arrayUsers = [];
    for (let i = 1; i < dataUsers.length; i++) {
      let arrayUser = [];
      for (let j = 0; j < dataUsers[i].length; j++) {
        arrayUser.push(dataUsers[i][j]);
      }
      arrayUsers.push(arrayUser);
    }
    return arrayUsers;
  }

  function createArrayDistributions(spreadsheet) {
    const sheets = spreadsheet.getSheets();
    let distributions = [];
    for (let i = 2; i < sheets.length; i++) {
      let data = sheets[i].getDataRange().getValues()
      for (let j = 0; j < data.length; j++) {
        let distribution = [];
        for (let k = 0; k < data[j].length; k++) {
          if (data[j][k] !== '') {
            distribution.push(data[j][k]);
          }
        }
        distributions.push(distribution);
      }
    }
    return distributions
  }

  function weightsHandler(matrix, arrayUsers, arraySettings) {
    for (let i = 0; i < arrayUsers.length; i++) {
      for (let j = 0; j < arrayUsers.length; j++) {
        for (let k = 2; k < arrayUsers[0].length; k++) {
          if ((i != j) && (arrayUsers[i][k-1] === arrayUsers[j][k-1])) {
            matrix[i][j] += arraySettings[k];
          }
        }
      }
    }
    return matrix;
  }

  function distributionsHandler(matrix, distributions, nameUsers, weight) {
    for (let distribution of distributions) {
      for (let [user1, user2] of permutator(distribution)) {
        matrix[nameUsers.indexOf(user1)][nameUsers.indexOf(user2)] += weight;
      }
    }
    return matrix;
  }

  function dataToSheet(spreadsheet, array) {
    const sheets = spreadsheet.getSheets();
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        sheets[sheets.length-1].getRange(i+1, j+1).setValue(array[i][j]);
      }
    }
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const arraySettings = createArraySettings(spreadsheet);
  const arrayUsers = createArrayUsers(spreadsheet);
  const arrayDistributions = createArrayDistributions(spreadsheet);

  const countUsers = arrayUsers.length;
  const countTeammates = arraySettings[0];
  const countTeams = Math.ceil(countUsers/countTeammates);
  const nameUsers = arrayUsers.map(user => user[0]);

  let matrix = Array.from({length: countUsers}, () => Array(countUsers).fill(0));
  matrix = weightsHandler(matrix, arrayUsers, arraySettings);
  matrix = distributionsHandler(matrix, arrayDistributions, nameUsers, arraySettings[1]);
  let doneDistribution = [];

  const teamLeaders = matrix.map((points, index) => index)
    .sort((a, b) => matrix[b].reduce((acc, val) => acc + val, 0) - matrix[a].reduce((acc, val) => acc + val, 0))
    .slice(0, countTeams);
  
  for (let teamLeader of teamLeaders) {
    for (let j = 0; j < countUsers; j++) {
        matrix[j][j] = Infinity;
        matrix[j][teamLeader] = Infinity;
    }
  }
  
  for (let teamLeader of teamLeaders) {
    team = [teamLeader];
    sums = []
    while (team.length < countTeammates && [...new Set(matrix[0])].length !== 1){
      for (let user = 0; user < countUsers; user++) {
          sums.push(team.map(teammate => matrix[teammate][user]).reduce((acc, val) => acc + val));
        }
        let minTeammate = sums.indexOf(Math.min(...sums));
        team.push(minTeammate);
        sums = [];
        for (let i = 0; i < countUsers; i++) {
          matrix[i][minTeammate] = Infinity;
        }
    }
    let nameTeammates = team.map(teammate => nameUsers[teammate]);
    doneDistribution.push(nameTeammates);
  }
  dataToSheet(spreadsheet, doneDistribution);
}
