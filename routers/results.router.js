const { Group, validate } = require('./../models/group.model')
const express = require('express')
const router = express.Router()
const _ = require('lodash')
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth.middleware')

router.get('/', cookieJwtAuth, async function(req, res){

    if (req.user.status === 1) {
        return res.render('super_admin_main', {
            name : req.user.name
        })
    } else {
        return res.render('login', {

        })
    }

});

module.exports = router;