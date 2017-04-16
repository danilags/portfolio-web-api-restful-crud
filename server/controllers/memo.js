let db = require('../models')

let getAll = function(req, res) {
  db.Memo.findAll({order: [['id', 'ASC']]}).then(function(memos) {
    res.send(memos)
  }).catch(function(err) {
    res.send(err.message)
  })
}


let createMemo = function(req, res) {
  db.Memo.create({
    title: req.body.title,
    content: req.body.content
  }).then(function(memo) {
    res.send(`Memo ${memo.title} success created !`)
  }).catch(function(err) {
    res.send(err.message)
  })
}

let updateMemo = function(req, res) {
  db.Memo.update(
    {title:req.body.title,content:req.body.content},
    {where:{id:req.params.id}}).then(function(result) {
      res.send("Data berhasil di update");
    }).catch(function(err) {
      res.send(err.message);
    })
}

let deleteMemo = function(req, res) {
  db.Memo.destroy({where:{
    id:req.params.id
  }}).then(function(data) {
    res.send("Data success deleted !")
  }).catch(function(err) {
    res.send(err.message)
  })
}

module.exports = {
  getAll,
  createMemo,
  updateMemo,
  deleteMemo
}
