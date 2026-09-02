export const USERS_URL =  "https://jsonplaceholder.typicode.com/users";

export const getUserById = (id:string) : string=>{
   return `https://jsonplaceholder.typicode.com/users/${id}`
}