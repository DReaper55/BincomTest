
class AnnouncedLgaResult {
    constructor({ result_id, lga_name, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address }) {
      this.resultId = result_id;
      this.lgaName = lga_name;
      this.partyAbbreviation = party_abbreviation;
      this.partyScore = party_score;
      this.enteredByUser = entered_by_user;
      this.dateEntered = date_entered;
      this.userIpAddress = user_ip_address;
    }
  
    toJSON() {
      return {
        result_id: this.resultId,
        lga_name: this.lgaName,
        party_abbreviation: this.partyAbbreviation,
        party_score: this.partyScore,
        entered_by_user: this.enteredByUser,
        date_entered: this.dateEntered,
        user_ip_address: this.userIpAddress,
      };
    }
  }
  
  module.exports = AnnouncedLgaResult;
  