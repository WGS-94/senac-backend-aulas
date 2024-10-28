const { resolve } = require("path");

async function fetchStuff() {
    const fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const postsJson = await fetchPosts.json();

    

    const postsMaisUsers = await Promise.all (
        postsJson.map(async (post) => {

            // postsJson.forEach(console.log(postsJson))


            // console.log(`Fetching user with ID: ${post.userId}`);

            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const user = await userResponse.json();
            
            post.userName = user.name;
            post.userEmail = user.email;
        }
    ))
    .then(
        postsMaisUsers.forEach((post) => {
            console.log(`Título do post: ${post.title}.\nNome do usuário: ${post.userName}\nEmail do usuário: ${post.userEmail}\n ----------------------\n`)
        })
    )
}

fetchStuff()

// const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}?_=${new Date().getTime()}`);
