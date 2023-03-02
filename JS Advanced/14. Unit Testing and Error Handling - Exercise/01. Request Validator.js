function validateRequest(requestObject) {
    if (!(requestObject.method == 'GET' || requestObject.method == 'POST' || requestObject.method == 'DELETE' || requestObject.method == 'CONNECT')) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriPattern = /[a-zA-Z0-9.*]+/;

    if (!requestObject.uri || requestObject['uri'].match(uriPattern)[0].length != requestObject['uri'].length) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(requestObject.version == 'HTTP/0.9' || requestObject.version == 'HTTP/1.0' || requestObject.version == 'HTTP/1.1' || requestObject.version == 'HTTP/2.0')) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messagePattern = /[^\<\>\\&\'\"]+/;

    if (!requestObject.hasOwnProperty('message') || (requestObject['message'].match(messagePattern) != null && requestObject['message'].match(messagePattern).length != requestObject['uri'].length)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObject;
}

// 88/100