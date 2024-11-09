export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {

  const response = await fetch('https://v2.api.noroff.dev/auth/register', {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password
    })
    }) 

    const data = await response.json()
    console.log(data)

}



