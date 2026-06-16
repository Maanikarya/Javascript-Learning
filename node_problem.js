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

    const isInvalid = (val) => val === "" || val === "N/A" || val === "-";

    function clean(obj) {
      if (Array.isArray(obj)) {
        return obj
          .filter(item => {
            if (isInvalid(item)) { removedCount++; return false; }
            return true;
          })
          .map(item => clean(item));
      }

      if (typeof obj === 'object' && obj !== null) {
        let newObj = {};
        for (let key in obj) {
          const value = obj[key];
          if (isInvalid(value)) {
            removedCount++;
            continue;
          }
          const cleaned = clean(value);
          const isEmpty =
            (Array.isArray(cleaned) && cleaned.length === 0) ||
            (typeof cleaned === 'object' && !Array.isArray(cleaned) &&
              cleaned !== null && Object.keys(cleaned).length === 0);

          if (!isEmpty) newObj[key] = cleaned;
        }
        return newObj;
      }

      return obj;
    }

    const result = clean(jsonData);
    result.items_removed = removedCount;
    console.log(JSON.stringify(result));
  });

  // ❌ REMOVED: resp.resume() and resp.statusCode log
  // These were interfering with the data stream

});