const jwt = require('jsonwebtoken')
const auth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token)
        {
            res.send('Login first ')
        }
        else{
           
            const decoded = await jwt.verify(token,'secret')
            
            if(!decoded){
                res.send('invalid token')
            }
            else{
                req.userId = decoded.userId;
                req.email= decoded.email;
                next()
            }

        }
    } catch (error) {
        res.send('middle ware error')
    }
}

module.exports = auth