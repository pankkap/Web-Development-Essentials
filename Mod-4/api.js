const api_url = "https://jsonplaceholder.typicode.com/users";

async function getApiData(url) {
  var res = await fetch(url);
  var data = await res.json();
  displayApiData(data);
}

getApiData(api_url);

function displayApiData(ServerData) {
  console.log(ServerData);
  // Loop for dealing the Object
  for (let user of ServerData) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerText = `${user.id}`;
    td2.innerText = `${user.name}`;
    td3.innerText = `${user.username}`;
    td4.innerText = `${user.email}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("myTable").appendChild(tr);
  }
}
