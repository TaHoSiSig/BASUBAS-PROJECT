import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState({ name:'', age:'', email:'', birthday:'', sex:'', contact_number:'' });
    const [success, setSuccess] = useState('');

    useEffect(() => {
        axios.get('/api/contacts')
            .then(res => setContacts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/contacts', form)
            .then(res => {
                setContacts([...contacts, res.data]);
                setForm({ name:'', age:'', email:'', birthday:'', sex:'', contact_number:'' });
                setSuccess('Message sent successfully!');
            })
            .catch(err => setSuccess('Failed to send message.'));
    };

    const handleDelete = id => {
        axios.delete(`/api/contacts/${id}`)
            .then(() => setContacts(contacts.filter(c => c.id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Contact Us</h1>

                        {success && <div className="alert alert-success">{success}</div>}

                        <form onSubmit={handleSubmit} className="row g-3 mb-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" placeholder="Age" name="age" value={form.age} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <input type="date" className="form-control" placeholder="Birthday" name="birthday" value={form.birthday} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Sex" name="sex" value={form.sex} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Contact Number" name="contact_number" value={form.contact_number} onChange={handleChange} required />
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-success w-50">Send Message</button>
                            </div>
                        </form>

                        <h4 className="mt-4">All Messages</h4>
                        <ul className="list-group">
                            {contacts.map(c => (
                                <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{c.name} ({c.email})</span>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
