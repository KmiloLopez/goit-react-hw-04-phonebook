import React, { Fragment } from 'react';
import {  useState } from "react";
import { nanoid } from 'nanoid';

export default function ContactForm ({submitForm}){
  const [name,setName]=useState("");
  const [number,setNumber]=useState("")

 const nameInputId = nanoid();
  const  numberInputId = nanoid();

 const handleChange = event => {
  const { name, value } = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
     return;
  };
}



const handleSubmit = event => {
  event.preventDefault();
  submitForm({name,number});
  reset();
  console.log(name, number);

};


const reset=()=> {
  setName('');
setNumber('');
};


// const ContactForm = ({
//   Name,
//   Number,
//   setName,
//   setNumber,
//   setContacts,
//   Contacts,
// }) => {
//   const addUser = () => {
//     const nuevoContacto = {
//       nombre: Name,
//       id: nanoid(),
//       numero: Number,
//     };

//     setContacts([...Contacts, nuevoContacto]);
//     setName('');
//     setNumber('');
//     console.log('nombre', nuevoContacto.nombre);
//     console.log('Name', Name);
//   };
  /*  const AddIT=()=> {
        
        let nuevoContacto = {
            nombre: Name,
            id: nanoid(),
            numero: Number,
        };
        setContacts([...Contacts, nuevoContacto]);
        setName("");
        setNumber("");
      
    } */
  /* const { handleInput, name, number, addUser } = this.props; */
  return (
    <Fragment>
      <form onSubmit={handleSubmit}
      >
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id ={nameInputId}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
        <button type="submit">Add contact</button>
      </form>
    </Fragment>
  );
};

//export default ContactForm;
