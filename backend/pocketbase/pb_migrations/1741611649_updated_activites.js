/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1301371036",
    "max": null,
    "min": null,
    "name": "duree_activite",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("number1301371036")

  return app.save(collection)
})
