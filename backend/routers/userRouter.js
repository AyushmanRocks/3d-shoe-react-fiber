// for performing user database operations
const express = require('express');
const router = express.Router();

// import user model to this router
const Model = require('../models/userModel');



router.post('/add', (req, res) => {
    console.log(req.body)
    // res.send('Add User Request');


    // async funcion
    new Model(req.body).save()

    .then((data) => {
       console.log(data);
       res.json(data); //default status is 200 if passed
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

    
})


router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
}
)



// : denotes a parameter
router.get('/getbymail/:email', (req, res) => {
    const email = req.params.email;
    console.log(email);
    // router.get('/getall', (req, res) => {
        Model.findOne({email:req.params.email})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    }
    );

// get by id
router.get('/getbyid/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // router.get('/getall', (req, res) => {
        Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    }
    );



// delete by id
router.delete('/getbyidanddelete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // router.get('/getall', (req, res) => {
        Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    }
    );



// update by id
router.put('/getbyidandupdate/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // router.get('/getall', (req, res) => {
        Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    }
    );

    // for signin aurtentication

router.post('/authenticate', (req, res) => {
    const formdata =req.body;
    console.log(formdata);
    Model.findOne({email:formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);
        
        // if condition will be true if user is not null
        if (result){
            console.log('login success');
            res.json(result);
        }
        else{
            console.log('login failed');
            res.status(400).json({status:'Login failed'});
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})


module.exports = router;
