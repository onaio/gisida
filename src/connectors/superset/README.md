# Superset Connector
This connector module uses an fetch-based API submodule to access slice data via Superset's new slice API endpoint. The API connector module uses simple configurations to construct and execute an AJAX request via [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Usage
```
import { SUPERSET } from 'gisida';

var config = {
  endpoint: 'slice',
  params: '892',
};

var apiRes = SUPERSET.API.fetch(config);
var apiData = apiRes.json().then(data => data);
```

### API Fetch Config
(required) Object contaning options / credentials
```
// config.endpoint - (required) API Key value to determine API Path
// config.token    - (optional) Access_Token provided by ONA Authorization
// config.method   - (optional) Specify HTTP Method (defaults to GET)
// config.params   - (optional) Additional parameters to be appeneded to API Path
// config.mimeType - (optional) Specify mimeType for Request Headers
```

### API Fetch Callback
(optional) Function to handle response, otherwise the response is simply returned
