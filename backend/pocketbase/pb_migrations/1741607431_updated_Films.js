/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3409974709",
    "max": 0,
    "min": 0,
    "name": "synopsis_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url191100634",
    "name": "bd_film",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number4147320964",
    "max": null,
    "min": null,
    "name": "duree_film",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
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
  collection.fields.addAt(6, new Field({
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

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1194168192",
    "max": 0,
    "min": 0,
    "name": "titre_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("text3409974709")

  // remove field
  collection.fields.removeById("url191100634")

  // remove field
  collection.fields.removeById("number4147320964")

  // remove field
  collection.fields.removeById("text3200872840")

  // remove field
  collection.fields.removeById("text967403474")

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1194168192",
    "max": 0,
    "min": 0,
    "name": "nom_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
