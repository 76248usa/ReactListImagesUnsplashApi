import axios from 'axios';

axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client_ID vuWSwCbuUkfJ2c3rxKk3LKHwXXjIqViwgCjBUD8T'

    }
})