
class State {
    constructor({ state_id, state_name }) {
      this.stateId = state_id;
      this.stateName = state_name;
    }
    
    toJSON() {
      return {
        state_id: this.stateId,
        state_name: this.stateName,
      };
    }
  }
  
  module.exports = State;
  