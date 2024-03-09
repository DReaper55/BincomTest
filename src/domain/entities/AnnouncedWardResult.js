
class AnnouncedWardResult {
    constructor({ result_id, ward_name, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address }) {
      this.resultId = result_id;
      this.wardName = ward_name;
      this.partyAbbreviation = party_abbreviation;
      this.partyScore = party_score;
      this.enteredByUser = entered_by_user;
      this.dateEntered = date_entered;
      this.userIpAddress = user_ip_address;
    }
  
    toJSON() {
      return {
        result_id: this.resultId,
        ward_name: this.wardName,
        party_abbreviation: this.partyAbbreviation,
        party_score: this.partyScore,
        entered_by_user: this.enteredByUser,
        date_entered: this.dateEntered,
        user_ip_address: this.userIpAddress,
      };
    }
  }
  
  module.exports = AnnouncedWardResult;
  