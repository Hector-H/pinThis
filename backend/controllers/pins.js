/* const express = require('express')
const pinRouter = express.Router()
const Pin = require('../models/pin')

// Create a new pin
pinRouter.post('/create', async (req, res) => {
    const body = req.body

    try {
        // Create a new pin
        const newPin = {
        userId: body.userId, // Get the user ID from the request or wherever it comes from
        photoUrl: body.photoUrl,
        description: body.description,
        createdAt: new Date().toISOString(),
        };

        // Save the pin to the database using the Pin model
        const createdPin = await Pin.createPin(newPin)

        return res.status(201).json(createdPin)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

pinRouter.get('/:id', async (req, res) => {
    const pinId = req.params.id;

    try {
        const pin = await Pin.findPinById(pinId)

        if (!pin) {
        return res.status(404).json({ error: 'Pin not found' })
        }

        return res.json(pin)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = pinRouter;
 */