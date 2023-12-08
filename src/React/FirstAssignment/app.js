import { getPostData,getUserData } from "./getData.js";

async function getUser(userId,postUserId){
    const user = await(
        getUserData(userId)
    )

    const post = await(
        getPostData(postUserId)
    )

    console.log(user)
    console.log(post)
}

getUser(1,2)