const Contact = require('../models/Contact');

exports.sendContactForm = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};