/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("text3200872840")

  // remove field
  collection.fields.removeById("text967403474")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3200872840",
    "max": 0,
    "min": 0,
    "name": "langue_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text967403474",
    "max": 0,
    "min": 0,
    "name": "genre_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
