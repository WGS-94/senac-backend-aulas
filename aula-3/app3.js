// async function fetchStuff() {
//     // Fetch the posts and users in parallel
//     const [fetchPosts, fetchUsers] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'),
//         fetch('https://jsonplaceholder.typicode.com/users')
//     ]);

//     // Parse the responses as JSON
//     const postsJson = await fetchPosts.json();
//     const usersJson = await fetchUsers.json();

//     // Create a map of users by userId for fast lookup
//     const usersById = usersJson.reduce((map, user) => {
//         map[user.id] = user;
//         return map;
//     }, {});

//     // Map each post to include the corresponding user data
//     const postsMaisUsers = postsJson.map(post => {
//         const user = usersById[post.userId];
//         return {
//             title: post.title,
//             userName: user.name,
//             userEmail: user.email
//         };
//     });

//     // Log each post with user details
//     postsMaisUsers.forEach((post) => {
//         console.log(`Título do post: ${post.title}.\nNome do usuário: ${post.userName}\nEmail do usuário: ${post.userEmail}\n ----------------------\n`);
//     });
// }

// fetchStuff();


async function fetchStuff() {
    // Fetch the posts and users in parallel
    const [fetchPosts, fetchUsers] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ]);

    // Parse the responses as JSON
    const postsJson = await fetchPosts.json();
    const usersJson = await fetchUsers.json();

    // Create a map of users by userId for fast lookup
    const usersById = usersJson.reduce((map, user) => {
        map[user.id] = user;
        return map;
    }, {});

    // Map each post to include the corresponding user data
    const postsMaisUsers = postsJson.map(post => {
        const user = usersById[post.userId];
        
        // Debugging: Log userId and user data
        console.log(`Post userId: ${post.userId}, Matched user:`, user);

        return {
            title: post.title,
            userName: user ? user.name : "User not found",
            userEmail: user ? user.email : "User not found"
        };
    });

    // Log each post with user details
    postsMaisUsers.forEach((post) => {
        console.log(`Título do post: ${post.title}.\nNome do usuário: ${post.userName}\nEmail do usuário: ${post.userEmail}\n ----------------------\n`);
    });
}

fetchStuff();
