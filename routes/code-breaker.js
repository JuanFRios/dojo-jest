
const { Router } = require('express');

const { validateNumber } = require('../controllers/code-breaker');
const { validateNumberDigits } = require('../middlewares/validate-number-digits');

const router = Router();

router.get('/', validateNumberDigits, validateNumber );


module.exports = router;