
// const getEnvValue = require('@/utils/getEnvValue')
const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
};

// Main request function
function request(config = {}) {
  const { method = 'GET', path, paramsOrData = {}, config: options = {} } = config;

  options.method = method;
  options.headers = { ...defaultHeaders, ...options.headers };

  if (method === 'GET' && Object.keys(paramsOrData).length > 0) {
    const params = new URLSearchParams(paramsOrData);
    config.path = `${path}?${params}`;
    
  } else if (method === 'POST') {
    options.body = JSON.stringify(paramsOrData);
  }

  return fetch(path, options)
    .then(async response => {
      try {
        return {
          success: response.ok,
          status: response.status,
          body: await response.json(),
        };
      } catch (error) {
        console.error(`Error fetching ${url}`, error);
        return { requestError: error.message };
      }
    })
    .catch(error => ({
      success: false,
      status: 500,
      body: error,
    }));
}

// Helper functions for GET and POST requests
function get(url, params = {}, config = {}) {
  console.log('GET: ', url, params)
  
  return request({ method: 'GET', path: url, paramsOrData: params, config });
}

function post(url, data = {}, config = {}) {
  return request({ method: 'POST', path: url, paramsOrData: data, config });
}

export { get, post };