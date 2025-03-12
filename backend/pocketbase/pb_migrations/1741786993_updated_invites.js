/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1824846182",
    "maxSelect": 1,
    "name": "role_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Realisateur",
      "Jury"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1824846182",
    "maxSelect": 1,
    "name": "role_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "realisateur",
      "jury"
    ]
  }))

  return app.save(collection)
})
