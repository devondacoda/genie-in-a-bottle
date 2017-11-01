const express = require('express');
const router = express().Router;
const { Product } = require('../db/models');

// router.route let's us chain multiple VERB requests off of the same path
// Helps keep code DRY
router.route('/') 
  .get()

