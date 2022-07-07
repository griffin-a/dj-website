export default (req, res) => {
    res.statusCode = 200
    res.json({ name: 'Welcome to the events API' })
  }