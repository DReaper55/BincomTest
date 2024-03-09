
class Ward {
    constructor({ uniqueid, ward_id, ward_name, lga_id, ward_description, entered_by_user, date_entered, user_ip_address }) {
      this.uniqueId = uniqueid;
      this.wardId = ward_id;
      this.wardName = ward_name;
      this.lgaId = lga_id;
      this.wardDescription = ward_description;
      this.enteredByUser = entered_by_user;
      this.dateEntered = date_entered;
      this.userIpAddress = user_ip_address;
    }
    
    toJSON() {
      return {
        uniqueid: this.uniqueId,
        ward_id: this.wardId,
        ward_name: this.wardName,
        lga_id: this.lgaId,
        ward_description: this.wardDescription,
        entered_by_user: this.enteredByUser,
        date_entered: this.dateEntered,
        user_ip_address: this.userIpAddress,
      };
    }
  }
  
  module.exports = Ward;
  