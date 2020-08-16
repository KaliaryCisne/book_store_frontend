import React from  'react';
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function FormBook() {
    return (
        <Container> 
            <div className="form-top">
                <h1 className="form-title">Register a book</h1>
                <Link to="/">
                    <FaArrowLeft color="#2A273A" size={26} />
                </Link>
            </div>
            <label htmlFor="">Title</label>
            <input 
                type="text"
                placeholder="Title"
                id=""
            />
            <label htmlFor="">Gender</label>
            <input 
                type="text"
                placeholder="Gender"
            />
            <label htmlFor="">Description</label>
            <input 
                type="text"
                placeholder="Description"
            />
            <label htmlFor="">Image</label>
            <input 
                type="text"
                placeholder="Image"
            />
            <label htmlFor="">Author</label>
            <input 
                type="text"
                placeholder="Author"
            />
            <label htmlFor="">Year</label>
            <input 
                type="text"
                placeholder="Year"
            />

            <button type="button">Save</button>  
            
        </Container>
    );
}