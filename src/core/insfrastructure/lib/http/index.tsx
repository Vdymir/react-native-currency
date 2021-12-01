interface ResponseWS<T extends any> {
  status: number;
  error: boolean;
  response: {
    message: string;
    statusCode: string;
    data: T;
  };
}

interface Options {
  headers?: any;
  body?: any;
}

const successResponses = Array.from(new Array(200), (_, index) => {
  return index + 200;
});

async function get<T>(url: string, options?: Options) {
  const header = new Headers();
  if (options !== undefined) {
    const {headers = {}} = options;
    Object.assign(header, headers);
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: header,
  });
  const result = {
    response: await response.json(),
    status: response.status,
    error: false,
  };
  if (!successResponses.includes(result.status)) {
    result.error = true;
  }
  return result as ResponseWS<T>;
}

async function post<T>(url: string, options?: Options) {
  const header = new Headers();
  let data!: any;
  if (options !== undefined) {
    const {headers = {}, body = {}} = options;
    Object.assign(header, headers);
    data = body;
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(data),
  });
  const result = {
    response: await response.json(),
    status: response.status,
    error: false,
  };
  if (!successResponses.includes(result.status)) {
    result.error = true;
  }
  return result as ResponseWS<T>;
}

async function put<T>(url: string, options?: Options) {
  const header = new Headers();
  let data!: any;
  if (options !== undefined) {
    const {headers = {}, body = {}} = options;
    Object.assign(header, headers);
    data = body;
  }
  const response = await fetch(url, {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(data),
  });
  const result = {
    response: await response.json(),
    status: response.status,
    error: false,
  };
  if (!successResponses.includes(result.status)) {
    result.error = true;
  }
  return result as ResponseWS<T>;
}

async function _delete<T>(url: string, options?: Options) {
  const header = new Headers();
  let data!: any;
  if (options !== undefined) {
    const {headers = {}, body = {}} = options;
    Object.assign(header, headers);
    data = body;
  }
  const response = await fetch(url, {
    method: 'DELETE',
    headers: header,
    body: JSON.stringify(data),
  });
  const result = {
    response: await response.json(),
    status: response.status,
    error: false,
  };
  if (!successResponses.includes(result.status)) {
    result.error = true;
  }
  return result as ResponseWS<T>;
}

const http = {
  get,
  post,
  put,
  delete: _delete,
};

export default http;
