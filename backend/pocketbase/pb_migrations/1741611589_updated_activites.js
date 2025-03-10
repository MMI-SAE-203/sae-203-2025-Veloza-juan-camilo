/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("text1972007657")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select1972007657",
    "maxSelect": 1,
    "name": "type_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "exposition",
      "atelier",
      "interview",
      "cérémonie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1972007657",
    "max": 0,
    "min": 0,
    "name": "type_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select1972007657")

  return app.save(collection)
})
