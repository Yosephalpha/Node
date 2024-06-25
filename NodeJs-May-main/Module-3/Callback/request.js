const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Making a GET request
request(url, { json: true }, (error, response, body) => {
    if (error) {
        console.error('An error occurred:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Unexpected status code:', response.statusCode);
        return;
    }

    console.log('Response:', body);
});
