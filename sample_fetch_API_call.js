import fetch from 'node-fetch';
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://data.gov.lv/dati/lv/api/3/action/datastore_search?resource_id=8065ad80-1a4d-4afb-b1d1-d93b9a62b1cc&limit=5",
    requestOptions)
    .then(response => response.json())
    .then(
        response => {
            let data = response.result.records;
            console.log("=== 10:", data);
        })
    .catch(error => console.log('error', error));