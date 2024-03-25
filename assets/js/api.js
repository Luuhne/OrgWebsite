function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.info("Request succeeded");
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJson(response) {
  var json = response.json();
  console.log("Data parsed:", json);
  return json;
}

function innerHTML(id, data) {
  console.log(`ID "${id}" is written with "${data}" data`);
  document.getElementById(id).innerHTML = data;
}

fetch(`${GitHub.URL.API}/users/${GitHub.Username.Redirect}`)
  .then(checkStatus)
  .then(parseJson)
  .then(function (data) {
    var login = data.login;
    var name = data.name;
    innerHTML("nickname", name);
    innerHTML("atnickname", login);
  })
  .catch(function (error) {
    console.error("Request failed:", error);
  });
