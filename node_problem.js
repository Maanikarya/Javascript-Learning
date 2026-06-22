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

    function isInvalid(value) {
      return value === "" || value === "N/A" || value === "-";
    }

    function clean(obj) {
      if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
          if (isInvalid(item)) {
            removedCount++;
          } else {
            result.push(clean(item));
          }
        }
        return result;
      }

      if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
          const value = obj[key];
          if (isInvalid(value)) {
            removedCount++;
            continue;
          }
          const cleaned = clean(value);
          // Skip if cleaning produced an empty object/array
          const isEmpty =
            (Array.isArray(cleaned) && cleaned.length === 0) ||
            (typeof cleaned === 'object' && cleaned !== null && !Array.isArray(cleaned) && Object.keys(cleaned).length === 0);

          if (!isEmpty) {
            newObj[key] = cleaned;
          }
        }
        return newObj;
      }

      return obj;
    }

    const result = clean(jsonData);
    result.items_removed = removedCount;
    console.log(JSON.stringify(result));
  });

}).on("error", err => {
  console.log("Error: " + err.message);
});