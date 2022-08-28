const express = require('express') ;
const router = express.Router() ;


const insurence = require('../Controllers/controlClaims') ;



router.get('/:id',insurence.getClaimId) ;
router.post('/',insurence.postClaim)  ;
router.get('/policy/:id' ,insurence.getPolicyId) ;
router.get('?hospital=xxx&date=yyyy-mm-dd',insurence.getHidDd) ;
router.put('/:id',insurence.putStatus) ;
router.delete('/:id',insurence.deleteClaim) ;


module.exports = {router} ;