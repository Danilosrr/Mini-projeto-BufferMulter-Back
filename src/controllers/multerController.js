export default async function multerController (req, res) {
    try {        
        console.log(req.file);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }  
};