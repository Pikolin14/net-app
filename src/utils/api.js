const API_URL = "https://jsonplaceholder.typicode.com/";  //El link es de una API

export default async function getPost() {   //async es porque await es asincrono
    const response = await fetch(`${API_URL}/posts`);    //await va de la mano con asing
    return response.json();
}

export async function getUser(user_id) {
    const response = await fetch(`${API_URL}/users/${user_id}`);
    return response.json();
}

export async function getUserPosts(user_id) {
    const response = await fetch(`${API_URL}/posts?userId=${user_id}`);
    return response.json();
}