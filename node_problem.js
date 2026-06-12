const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  resp.on('data', chunk => data += chunk);

  resp.on('end', () => {
    let jsonData = JSON.parse(data);
    let removedCount = 0;

    function clean(obj) {

      // Handle Array
      if (Array.isArray(obj)) {
        let newArr = obj
          .filter(item => {
            const invalid = item === "" || item === "N/A" || item === "-";
            if (invalid) removedCount++;
            return !invalid;
          })
          .map(item => clean(item));

        return newArr;
      }

      // Handle Object
      else if (typeof obj === 'object' && obj !== null) {
        let newObj = {};

        for (let key in obj) {
          let value = obj[key];

          if (value === "" || value === "N/A" || value === "-") {
            removedCount++;
          } else {
            const cleanedValue = clean(value);

            // ✅ REMOVE empty array/object ALSO
            if (
              cleanedValue !== null &&
              !(Array.isArray(cleanedValue) && cleanedValue.length === 0) &&
              !(typeof cleanedValue === 'object' &&
                !Array.isArray(cleanedValue) &&
                Object.keys(cleanedValue).length === 0)
            ) {
              newObj[key] = cleanedValue;
            } else {
              removedCount++;
            }
          }
        }

        return newObj;
      }

      // Primitive
      return obj;
    }

    let result = clean(jsonData);

    // ✅ FINAL KEY (IMPORTANT)
    result.items_removed = removedCount;

    console.log(JSON.stringify(result));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});