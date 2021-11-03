"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      let newRecord = await this.model.create(obj);
      return newRecord;
    } catch {
      console.error("there is err in creat");
    }
  }
  async read(id) {
    let record;
    try {
      if (id) {
        record = await this.model.findOne({ where: { id: id } });
      } else {
        record = await this.model.findAll();
      }
      return record
    } catch {
      console.error("there is err in getting record/s");
    }
  }
  async update(id, obj) {
    try {
      let recordId = await this.model.findOne({ where: { id: id } });
      let updateRecord = await recordId.update(obj);
      return updateRecord;
    } catch {
      console.error("there is err in updating record");
    }
  }
  async delete(id) {
    try {
      let deleteRecord = await this.model.destroy({ where: { id: id } });
      return deleteRecord;
    } catch {
      console.error("there is err in deleting record");
    }
  }
}

module.exports = Collection;
