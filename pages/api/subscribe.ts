export default (req, res) => {
    const { email } = req.body;
	
	if (!email) {
	  return res.status(400).json({ error: 'Email is required' });
	}

    return res.status(200).json({ email });
}