
class Lga {
    constructor({ uniqueid, lga_id, lga_name, state_id, lga_description, entered_by_user, date_entered, user_ip_address }) {
      this.uniqueId = uniqueid;
      this.lgaId = lga_id;
      this.lgaName = lga_name;
      this.stateId = state_id;
      this.lgaDescription = lga_description;
      this.enteredByUser = entered_by_user;
      this.dateEntered = date_entered;
      this.userIpAddress = user_ip_address;
    }
  
    toJSON() {
      return {
        uniqueid: this.uniqueId,
        lga_id: this.lgaId,
        lga_name: this.lgaName,
        state_id: this.stateId,
        lga_description: this.lgaDescription,
        entered_by_user: this.enteredByUser,
        date_entered: this.dateEntered,
        user_ip_address: this.userIpAddress,
      };
    }
  }
  
  module.exports = Lga;
  