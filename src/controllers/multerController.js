export default async function postFile (req, res) {
    try {
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }  
};