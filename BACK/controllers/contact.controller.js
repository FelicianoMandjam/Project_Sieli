import { Contact } from "../models/index.js";


// const add = async ( req , res , next )=>{
//     try {
//         const contact = await Contact.create(req.body)
//         res.status(201).json("New Message as been added ! ") 
//     } catch (error) {
//         console.log(error);
//         next(error)
//     }
// };

// const allContact = async (req , res)=>{
//     try {
//         const contacts = await Contact.findAll()
//         res.status(200).json(contacts)
//     } catch (e) {
//         console.log(e)
//         res.status(400).json("No contact found ! ")
//     }
// };

// Modifier pour que le seul l'Admin puisse exécuter ces actions 
// const deleteById = async (res , req ) => {
//     try{
//         const delectedContact = await Contact.destroy({ where: { id: req.params.id } })

//         if(!delectedContact) return res.status(400).json('Contact not found!')
//     }catch(e){
//     console.log(e);
//     }
// };

// export {add ,allContact, deleteById}


export const sendMail =async (req , res) => {
console.log(req.body);
const contact = await Contact.create(req.body)

res.json("Voir console")
} 