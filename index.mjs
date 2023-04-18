export const handler = async(event) => {
    // TODO implement
  const { userName, password } = event;

  // Check if username and password meet required format
  const usernameRegex = /^[a-zA-Z0-9]{1,8}$/;
  const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,8}$/;

  if (userName && password && usernameRegex.test(userName) && passwordRegex.test(password)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'SUCCESS' }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'FAILED' }),
    };
  }
};