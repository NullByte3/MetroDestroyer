async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/1');
        const data = await response.json();
        console.log('User data:', data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
getUser();