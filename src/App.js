import React from "react";
import { useEffect, useState } from "react";
 import { nanoid } from "nanoid"; 
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import {Container, Container2} from "./Components/Styled/Container.styled";
//import PropTypes from 'prop-types';

export default function App() {
  const [contacts,setContacts]=useState(()=>{
    return JSON.parse(window.localStorage.getItem("contacts"))?? [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },];
  });
  const [filter,setFilter]=useState("");
  
  
  useEffect(()=>{
  window.localStorage.setItem("contacts",JSON.stringify(contacts));
  },[contacts])
  
  const  addContact = ({name,number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    if(contacts.find(contact=>contact.name===name)){
     
     alert(`${contact.name} is already in contact`);
      return null;
      
    }
  
    setContacts((prevState) => [contact, ...prevState],
      
      
    );
    alert(`Contact ${name} Successfully created!`);
  };
  
  const deleteContact = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
  };
  
  
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value );
  }; 
  
    
    const filtredContacts= () => {
    const normalizedFilter = filter.toLowerCase();
     return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      )}
  
    // const [Contacts, setContacts] =useState([{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]);
    // const [Name, setName] =useState("");
    // const [Number, setNumber] =useState("");
    // const [Filtering, setFiltering] =useState("");
    /* constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
                { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
                { id: "id-3", name: "Eden Clements", number: "645-17-79" },
                { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
            ],
            name: "",
            number: "",
            filtering: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.addUser = this.addUser.bind(this);
    } */
/*     const addUser = (e) => {
         e.preventDefault(); 
        const { value } = e.currentTarget.name.value;
       
        setName(value);

        
        let included =false;
        if (Name && Number) {
            Contacts.map((contacto)=>{
                
                return( contacto.name.toLowerCase()===Name.toLowerCase()
                    ?included=true:console.log("")
                    )
            })
            if(included===true){
                alert(`${Name} is already in contacts`)
                setName("");
                setNumber("");
               

            }
            else{
                AddIT();
            } 
        }
        
    }; */
    

   /*  const handleInput = (e) => {
     
        const { value } = e.currentTarget.name.value;
       
        setName(value);
       
    }; */
 
    
    // useEffect(()=>{
        
    //     if (Contacts.length>0){
    //         localStorage.setItem('myContacts', JSON.stringify(Contacts));
            
    //     }
        

    // },)
    
   /*  componentDidUpdate(){
        const {contacts}= this.state
        let contar = 1
        if (contar===1 && contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(contacts));
            contar=2;
        }
        let contactsFromLocal=localStorage.getItem('myContacts')
        if(JSON.parse(contactsFromLocal)!==contacts){
            localStorage.setItem('myContacts', JSON.stringify(contacts))
        }
    } */
    // useEffect(()=>{
    //     console.log("useEffectDidMount pendiente por agregar")
    //     /* let contar = 1
    //     if (contar===1 && Contacts.length>0){
    //         localStorage.setItem('myContacts', JSON.stringify(Contacts));
    //         contar=2;
    //     }
       
    //     let contactsFromLocal=localStorage.getItem('myContacts');
    //     let contactosFromLocal =JSON.parse(contactsFromLocal);
    //    setContacts(contactosFromLocal); */
        
    // },[]);
    /* componentDidMount(){
        const {contacts}= this.state
        let contar = 1
        if (contar===1 && contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(contacts));
            contar=2;
        }
       
        let contactsFromLocal=localStorage.getItem('myContacts')
        let contactosFromLocal =JSON.parse(contactsFromLocal)
      
        this.setState({
            contacts:contactosFromLocal
           })
    } */
    
        
        
        
        
        return (
            <Container>
                <Container2>
                    <h1>Phonebook</h1>
                    <ContactForm
                    submitForm  ={addContact}
                        /* handleInput={handleInput()} */
                        // Name={Name}
                        // Number={Number}
                        // setName={setName}
                        // setNumber={setNumber}
                        // setContacts={setContacts}
                        // Contacts ={Contacts}
                        /* addUser={addUser()} */
                    />
                    <h1>Contacts</h1>
                    <Filter Filtering={filter} setFiltering={changeFilter}/> 
                    <ContactList contacts={filtredContacts()} onDeleteContact={deleteContact}/> 

                </Container2>
            </Container>
        );

}
// ContactForm.propTypes ={

    
//     name:PropTypes.string,
//     number:PropTypes.number

// }
// export default Form;
