async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
    }
  
    return await response.json();
  }
  
  async function testFetchFunction() {
    try {
  
      const userData = await fetchData('https://reqres.in/api/users/1');
      console.log('GET result:', userData);
  
      const user = {
        name: 'John Doe',
        job: 'Developer'
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      const createdUser = await fetchData('https://reqres.in/api/users', options);
      console.log('POST result:', createdUser);
  
      const updatedUser = {
        name: 'John Doe',
        job: 'Senior Developer'
      };
      const putOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      };
      const updatedUserData = await fetchData('https://reqres.in/api/users/1', putOptions);
      console.log('PUT result:', updatedUserData);
  
      const deleteOptions = {
        method: 'DELETE'
      };
  
      const deleteResult = await fetchData('https://reqres.in/api/users/1', deleteOptions);
      console.log('DELETE result:', deleteResult);
    // ???? Says no.
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  testFetchFunction();