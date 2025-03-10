/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2452428166",
    "hidden": false,
    "id": "relation2508293876",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite_a",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("relation2508293876")

  return app.save(collection)
})
