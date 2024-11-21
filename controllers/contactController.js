const asyncHandler = require("express-async-handler");
//@des Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res) => {
    res.status(200).json({ message : "Get all contacts"});
})

//@des Create new contact
//@route Post /api/contacts
//@access public

const createContact = asyncHandler(async (req,res) => {
    console.log("The request body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ message : "Create contact"});
})

//@des Get a contacts
//@route Get /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `Get user with id ${req.params.id}`});
})

//@des Update a contact
//@route Put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `Update contact for ${req.params.id}`});
})

//@des Delete a contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `Delete contact for ${req.params.id}`});
})

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}