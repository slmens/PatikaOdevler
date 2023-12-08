import axios from 'axios';

const getUserData = (userId) => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        resolve(data)
    })
}

const getPostData = (userId) => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        resolve(data)
    })
}

export {getPostData,getUserData}