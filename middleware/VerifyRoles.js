// const verifyRoles = (...allowedRoles) => {
    
//     return (req, res, next) => {
        
//         if(!req?.roles) return res.sendStatus(401);
//         const rolesArray = [...allowedRoles];
//         console.log(rolesArray);
//         const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
//         if(!result) return res.sendStatus(401);
//         next();
//     }
            
// } 

// module.exports = verifyRoles;



const verifyRoles = (permissions) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if(permissions.includes(userRole)){
            next();
        }else {
            return res.status(401).json("you dont have permission")
        }
    
}

}

module.exports = verifyRoles; 

