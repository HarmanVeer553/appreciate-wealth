// src/components/FaqPage.js
import React, { useEffect, useState } from 'react';
import '../styles/FaqPage.css'; // CSS for styling the FAQ page

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);

  // Fetch FAQs from the backend
  useEffect(() => {
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);

  // Handle adding a new FAQ
  const handleAddFaq = () => {
    fetch('/api/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFaq)
    })
      .then((res) => res.json())
      .then((addedFaq) => {
        setFaqs([...faqs, addedFaq]);
        setNewFaq({ question: '', answer: '' });
      })
      .catch((error) => console.error('Error adding FAQ:', error));
  };

  // Handle updating an FAQ
  const handleUpdateFaq = (id) => {
    fetch(`/api/faqs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingFaq)
    })
      .then((res) => res.json())
      .then((updatedFaq) => {
        setFaqs(faqs.map((faq) => (faq._id === id ? updatedFaq : faq)));
        setEditingFaq(null);
      })
      .catch((error) => console.error('Error updating FAQ:', error));
  };

  // Handle deleting an FAQ
  const handleDeleteFaq = (id) => {
    fetch(`/api/faqs/${id}`, { method: 'DELETE' })
      .then(() => setFaqs(faqs.filter((faq) => faq._id !== id)))
      .catch((error) => console.error('Error deleting FAQ:', error));
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>

      {/* FAQ List */}
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            {editingFaq && editingFaq._id === faq._id ? (
              <div>
                <input
                  type="text"
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  placeholder="Edit question"
                />
                <input
                  type="text"
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                  placeholder="Edit answer"
                />
                <button onClick={() => handleUpdateFaq(faq._id)}>Save</button>
                <button onClick={() => setEditingFaq(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
                <button onClick={() => setEditingFaq(faq)}>Edit</button>
                <button onClick={() => handleDeleteFaq(faq._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Form for adding new FAQ */}
      <div className="faq-form">
        <h3>Add New FAQ</h3>
        <input
          type="text"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          placeholder="Question"
        />
        <input
          type="text"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          placeholder="Answer"
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
    </div>
  );
};

export default FaqPage;
