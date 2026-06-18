const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  resp.on('data', chunk => data += chunk);

  resp.on('end', () => {
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      console.log("Failed to parse JSON:", e.message);
      return;
    }

    let removedCount = 0;

    function clean(obj) {
      if (Array.isArray(obj)) {
        return obj
          .filter(item => {
            const invalid = item === "" || item === "N/A" || item === "-";
            if (invalid) removedCount++;
            return !invalid;
          })
          .map(item => clean(item));
      }

      else if (typeof obj === 'object' && obj !== null) {
        let newObj = {};

        for (let key in obj) {
          let value = obj[key];

          if (value === "" || value === "N/A" || value === "-") {
            removedCount++;
          } else {
            const cleanedValue = clean(value);
            const isEmpty =
              (Array.isArray(cleanedValue) && cleanedValue.length === 0) ||
              (typeof cleanedValue === 'object' &&
                !Array.isArray(cleanedValue) &&
                cleanedValue !== null &&
                Object.keys(cleanedValue).length === 0);

            if (!isEmpty) {
              newObj[key] = cleanedValue;
            }
            // ✅ No longer counting parent removals caused by empty children
          }
        }

        return newObj;
      }

      return obj;
    }

    let result = clean(jsonData);
    result.items_removed = removedCount;
    console.log(JSON.stringify(result));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});