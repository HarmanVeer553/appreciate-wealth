const express = require('express');
const FAQ = require('../model/FAQ');
const router = express.Router();
// Create FAQ
router.post('/', async (req, res) => {
    try {
        const faq = new FAQ(req.body);
        await faq.save();
        res.status(201).send(faq);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all FAQs
router.get('/', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).send(faqs);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get FAQ by ID
router.get('/:id', async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        if (!faq) return res.status(404).send({ error: "FAQ not found" });
        res.status(200).send(faq);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update FAQ by ID
router.put('/:id', async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!faq) return res.status(404).send({ error: "FAQ not found" });
        res.status(200).send(faq);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete FAQ by ID
router.delete('/:id', async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndDelete(req.params.id);
        if (!faq) return res.status(404).send({ error: "FAQ not found" });
        res.status(200).send({ message: "FAQ deleted successfully" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
