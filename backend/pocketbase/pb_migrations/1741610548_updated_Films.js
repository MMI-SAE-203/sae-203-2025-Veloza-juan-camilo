/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select967403474",
    "maxSelect": 1,
    "name": "genre_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "animation",
      "action",
      "drame",
      "comedie"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select3200872840",
    "maxSelect": 1,
    "name": "langue_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "français",
      "espagnol",
      "anglais"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("select967403474")

  // remove field
  collection.fields.removeById("select3200872840")

  return app.save(collection)
})
