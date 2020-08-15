import React from  'react';
import { Container } from './styles';

export default function FormBook() {
    return (
        <Container> 
            <h1 className="form-title">Register a book</h1>
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