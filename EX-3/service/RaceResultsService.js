
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    return this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO

    // JSON.stringify(value, replacer, space) make the JSON file more clean formatting
    const data = JSON.stringify(this.raceResults, null, 2);

    fs.writeFileSync(filePath, data, 'utf8');

    console.log("Race results saved successfully.");

  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO

    try {
      const data = fs.readFileSync(filePath, "utf8");
      const parsedData = JSON.parse(data);

      this._raceResults = parsedData.map(result => {

        const duration = new Duration(
            result._duration._totalSeconds
        );

        return new RaceResult(
            result._participantId,
            result._sportType,
            duration
        );
      });

      console.log("Race results loaded successfully.");
      return true;
    } catch (e) {
      console.log("Error loading file. ",e);
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO

    const result = this.raceResults.find(race => race.participantId=== participantId && race.sportType === sport);

    if (result) {
      return result.duration;
    }

    return null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
    const participantResults = this.raceResults.filter(race => race.participantId=== participantId);

    let totalDuration = new Duration(0);
    participantResults.forEach(result => {
      totalDuration = totalDuration.plus(result.duration);
    })

    return totalDuration;
  }
}
