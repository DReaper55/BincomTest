
class AnnouncedPuResult {
  constructor({ result_id, polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address }) {
    this.resultId = result_id;
    this.pollingUnitUniqueId = polling_unit_uniqueid;
    this.partyAbbreviation = party_abbreviation;
    this.partyScore = party_score;
    this.enteredByUser = entered_by_user;
    this.dateEntered = date_entered;
    this.userIpAddress = user_ip_address;
  }

  toJSON() {
    return {
      result_id: this.resultId,
      polling_unit_uniqueid: this.pollingUnitUniqueId,
      party_abbreviation: this.partyAbbreviation,
      party_score: this.partyScore,
      entered_by_user: this.enteredByUser,
      date_entered: this.dateEntered,
      user_ip_address: this.userIpAddress,
    };
  }
}

module.exports = AnnouncedPuResult;
