async function createUser() {
    try {
        const userData = {
            name: 'John Doe',
            job: 'Software Enginner'
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };

        const response = await fetch('https://reqres.in/api/users', options);
        const data = await response.json();

        console.log('Created user:', data);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

createUser();