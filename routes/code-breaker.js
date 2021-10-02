
const { Router } = require('express');

const { validateNumber, restartGame } = require('../controllers/code-breaker');
const { validateNumberDigits } = require('../middlewares/validate-number-digits');

const router = Router();

router.get('/', validateNumberDigits, validateNumber );

router.post('/', restartGame );

module.exports = router;