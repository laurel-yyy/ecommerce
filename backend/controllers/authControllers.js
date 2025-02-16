const adminModel = require('../models/adminModel')
const { responseReturn } = require('../utiles/response')
const bcrypt = require('bcrypt')
const { createToken } = require('../utiles/tokenCreate')

class authControllers {
    admin_login = async(req, res) => {
        console.log(req.body)
        try{
            const {email, password} = req.body
            const admin = await adminModel.findOne({email}).select('+password')
            console.log(admin)

            if (admin) {
                const match = await bcrypt.compare(password, admin.password)
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken',token, {
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 70),
                    })
                    responseReturn(res, 200, {token, message: "Login success"})

                } else {
                    responseReturn(res, 404, {error: "Password is incorrect"})
                }
            } else {
                responseReturn(res, 404, {error: "Invalid email"})       
            }
        } catch(err){
            responseReturn(res, 500, {error: err.message})
        }
    }

    getUser = async(req, res) => {
        const {id, role} = req;
        try{
            if(role ==='admin') {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, {userInfo: user})
            } else {
                console.log("seller info")
            }

        } catch(err){
            console.log(err.message);
        }
    }
}

module.exports = new authControllers()