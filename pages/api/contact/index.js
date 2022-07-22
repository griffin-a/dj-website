const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

export default (req, res) => {
    // Get data submitted in request's body.
  const body = JSON.parse(req.body)

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  // console.log(body.name);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email || !body.phone || !body.message || !body.subject) {
    console.log("Server side error!");
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'A parameter was missing from the form' })
  }

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json(body)
}