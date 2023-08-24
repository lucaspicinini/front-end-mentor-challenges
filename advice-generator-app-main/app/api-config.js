const slip = {}

slip.getBody = () => {

  const url = "https://api.adviceslip.com/advice"

  return fetch(url)
    .then((response) => response.json())
    .then((jBody) => jBody.slip)
    .catch((error) => console.error(error))

}