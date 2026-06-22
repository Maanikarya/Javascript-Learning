const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  
  let data = '';

  resp.on('data' , (chunk) =>  {
    data += chunk;
  });


  resp.on( 'end' , () => {

    let jsonData;

    try{
      jsonData = JSON.parse(data);
    }catch (e) {
      console.log(" Invalid JSON ");
      return ; 
    }

    let removedCount = 0;

    function cleanObject(obj) {

      if( Array.isArray( obj ) ){
        // Clean Array
        return obj
        .filter( item => {
          if( item === "" || item === "N/A" || item === "-" ){
            removedCount++;
            return false;
          }
          return true; 
        }).map( item => cleanObject(item) );
      }

      else if ( typeof obj === 'object' && obj !== null ){

        let newObj = {}; 

        for( let key in obj ){
          let value = obj[key];

          if( value ===  "" || value === "N/A" || value === "-" ){
            removedCount++;
            continue;
          }

          newObj[key] = cleanObject(value);
        }
        return newObj ; 
      }
      return obj ; 
    }

    let cleanedData = cleanObject(jsonData);

    cleanedData["items_removed"] = removedCount ; 

    console.log( 
      JSON.stringify(cleanedData)
    );

  })
  
  // console.log(resp.statusCode);
  // resp.resume(); 

  resp.on('error' , err => {
    console.log("Response error: " + err.message);
  });

}).on("error" , err => {
  console.log( " Request error : " + err.message ); 
});

