/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file384389147",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_activite",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("file384389147")

  return app.save(collection)
})
