import React from 'react'
// import { useEffect } from 'react'
/* import useState from 'react' */


const ContactList = ({  contacts, onDeleteContact}) => (
   <div>
      <ul >
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
               {name}: {number}
            
            <button
              type="button"
          
              onClick={() => {
                onDeleteContact(id);
            }}
            
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
)

export default ContactList