const adminModel = require('../models/adminModel')
const sellerModel = require('../models/sellerModel')
const sellerCustomerModel  = require('../models/chat/sellerCustomerModel')
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

    seller_register = async(req, res) => {
        const {name, email, password} = req.body;
        try {
            const getUser = await sellerModel.findOne({email})
            if(getUser) {
                responseReturn(res, 404, {error: "Email already exist"})
            } else {
                const seller = await sellerModel.create ({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method:'menualy',
                    shopInfo:{}
                })
                console.log(seller)
                await sellerCustomerModel.create({
                    myId: seller.id
              })

              const token = await createToken({ id : seller.id, role: seller.role })
              res.cookie('accessToken',token, {
               expires : new Date(Date.now() + 7*24*60*60*10000 )
              })

              responseReturn(res,201,{token,message: 'Register Success'})
            }
            
        } catch (error) {
            responseReturn(res,500,{error: 'Internal Server Error'})
        }
    }

    seller_login = async(req,res) => {
        const {email,password} = req.body
        try {
            const seller = await sellerModel.findOne({email}).select('+password')
            if (seller) {
                const match = await bcrpty.compare(password, seller.password)
                if (match) {
                    const token = await createToken({
                        id : seller.id,
                        role : seller.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000 )
                    }) 
                    responseReturn(res,200,{token,message: "Login Success"})
                } else {
                    responseReturn(res,404,{error: "Password Wrong"})
                }
 
                 
            } else {
                responseReturn(res,404,{error: "Email not Found"})
            }
            
        } catch (error) {
            responseReturn(res,500,{error: error.message})
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