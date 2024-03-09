
class AgentName {
    constructor({ name_id, firstname, lastname, email, phone, pollingunit_uniqueid }) {
      this.nameId = name_id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.phone = phone;
      this.pollingunitUniqueId = pollingunit_uniqueid;
    }
  
    toJSON() {
      return {
        name_id: this.nameId,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        pollingunit_uniqueid: this.pollingunitUniqueId,
      };
    }
  }
  
  module.exports = AgentName;
  