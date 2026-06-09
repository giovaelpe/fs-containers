const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async(_,res) => {
  const numTodos = await redis.get("added_todos");
  if(!numTodos){
    await redis.set("added_todos", "0");
    res.json({added_todos: 0});
    return
  }
  res.json({added_todos: numTodos})
})

//ading comment to test

module.exports = router;
