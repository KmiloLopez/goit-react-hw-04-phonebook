import React from "react";
import { useEffect, useState } from "react";
/* import { nanoid } from "nanoid"; */
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import {Container, Container2} from "./Components/Styled/Container.styled";
import PropTypes from 'prop-types';

const Form =()=> {
    const [Contacts, setContacts] =useState([{ id: "id-1", nombre: "Rosie Simpson", numero: "459-12-56" },
    { id: "id-2", nombre: "Hermione Kline", numero: "443-89-12" },
    { id: "id-3", nombre: "Eden Clements", numero: "645-17-79" },
    { id: "id-4", nombre: "Annie Copeland", numero: "227-91-26" },]);
    const [Name, setName] =useState("");
    const [Number, setNumber] =useState("");
    const [Filtering, setFiltering] =useState("");
    /* constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { id: "id-1", nombre: "Rosie Simpson", numero: "459-12-56" },
                { id: "id-2", nombre: "Hermione Kline", numero: "443-89-12" },
                { id: "id-3", nombre: "Eden Clements", numero: "645-17-79" },
                { id: "id-4", nombre: "Annie Copeland", numero: "227-91-26" },
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
                
                return( contacto.nombre.toLowerCase()===Name.toLowerCase()
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
 
    
    useEffect(()=>{
        
        if (Contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(Contacts));
            
        }
        

    },)
    
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
    useEffect(()=>{
        console.log("useEffectDidMount pendiente por agregar")
        /* let contar = 1
        if (contar===1 && Contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(Contacts));
            contar=2;
        }
       
        let contactsFromLocal=localStorage.getItem('myContacts');
        let contactosFromLocal =JSON.parse(contactsFromLocal);
       setContacts(contactosFromLocal); */
        
    },[]);
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
                        /* handleInput={handleInput()} */
                        Name={Name}
                        Number={Number}
                        setName={setName}
                        setNumber={setNumber}
                        setContacts={setContacts}
                        Contacts ={Contacts}
                        /* addUser={addUser()} */
                    />
                    <h1>Contacts</h1>
                    <Filter Filtering={Filtering} setFiltering={setFiltering}/> 
                    <ContactList setContacts={setContacts} Contacts={Contacts} Filtering={Filtering} setName={setName}/> 

                </Container2>
            </Container>
        );

}
ContactForm.propTypes ={

    
    name:PropTypes.string,
    number:PropTypes.number

}
export default Form;
