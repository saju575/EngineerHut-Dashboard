const Customer = require("../../models/customer.model");

exports.createCustomer = async (req, res) =>{
    try {
        const { image,
            firstName,
            lastName,
            dateOfBirth,
            gender,
            phone, 
            email,
            country
         } = req.body;
        
        const customer = await Customer.create({
            image,
            firstName,
            lastName,
            dateOfBirth,
            gender,
            phone, 
            email,
            country
        });
        console.log(customer);
        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            customer
        })
      } catch (error) {
        res.status(500).json({
          success: false,
          error,
        });
      }
}

exports.getCustomers = async(req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json({
      success: true,
      customer
    });
}