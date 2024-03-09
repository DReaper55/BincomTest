
class PollingUnit {
    constructor({
      uniqueid,
      polling_unit_id,
      ward_id,
      lga_id,
      uniquewardid,
      polling_unit_number,
      polling_unit_name,
      polling_unit_description,
      lat,
      long,
      entered_by_user,
      date_entered,
      user_ip_address,
    }) {
      this.uniqueId = uniqueid;
      this.pollingUnitId = polling_unit_id;
      this.wardId = ward_id;
      this.lgaId = lga_id;
      this.uniqueWardId = uniquewardid;
      this.pollingUnitNumber = polling_unit_number;
      this.pollingUnitName = polling_unit_name;
      this.pollingUnitDescription = polling_unit_description;
      this.lat = lat;
      this.long = long;
      this.enteredByUser = entered_by_user;
      this.dateEntered = date_entered;
      this.userIpAddress = user_ip_address;
    }
    
    toJSON() {
      return {
        uniqueid: this.uniqueId,
        polling_unit_id: this.pollingUnitId,
        ward_id: this.wardId,
        lga_id: this.lgaId,
        uniquewardid: this.uniqueWardId,
        polling_unit_number: this.pollingUnitNumber,
        polling_unit_name: this.pollingUnitName,
        polling_unit_description: this.pollingUnitDescription,
        lat: this.lat,
        long: this.long,
        entered_by_user: this.enteredByUser,
        date_entered: this.dateEntered,
        user_ip_address: this.userIpAddress,
      };
    }
  }
  
  module.exports = PollingUnit;
  