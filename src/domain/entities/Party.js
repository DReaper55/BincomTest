
class Party {
    constructor({ id, partyid, partyname }) {
      this.id = id;
      this.partyId = partyid;
      this.partyName = partyname;
    }
  
    toJSON() {
      return {
        id: this.id,
        partyid: this.partyId,
        partyname: this.partyName,
      };
    }
  }
  
  module.exports = Party;
  