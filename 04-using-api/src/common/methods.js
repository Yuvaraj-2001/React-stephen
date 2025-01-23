import axios from 'axios';

export async function fetchData(term) {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: 'Client-ID qazOqh8xeH9d_o_7wQjEqZ2b9YwpJSiuiqpyqcGlCrU'
        },
        params: {
            query: term
        }
    });
    console.log(response);  // Output: The response data from the server.
    return response;
    
}
