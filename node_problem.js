const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  resp.on('data', chunk => data += chunk);

  resp.on('end', () => {
    let jsonData = JSON.parse(data);
    let removedCount = 0;

    const isInvalid = (val) => {
      return (
        typeof val === "string" &&
        (val.trim() === "" || val.toLowerCase() === "n/a" || val === "-")
      );
    };

    function clean(obj) {
      if (Array.isArray(obj)) {
        let cleanedArr = obj
          .filter(item => {
            if (isInvalid(item)) {
              removedCount++;
              return false;
            }
            return true;
          })
          .map(item => clean(item));

        return cleanedArr;
      }

      if (typeof obj === "object" && obj !== null) {
        let newObj = {};

        for (let key in obj) {
          let value = obj[key];

          if (isInvalid(value)) {
            removedCount++;
            continue;
          }

          let cleanedValue = clean(value);

          newObj[key] = cleanedValue;
        }

        return newObj;
      }

      return obj;
    }

    let result = clean(jsonData);
    result["items_removed"] = removedCount;

    console.log(JSON.stringify(result));
  });

}).on("error", err => {
  console.log("Error: " + err.message);
});