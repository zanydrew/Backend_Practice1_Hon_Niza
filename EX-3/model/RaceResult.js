import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
  /**
   * Participant ID.
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * Sport type
   * @type {string}
   * @private
   */
  _sportType;

  /**
   * Race duration.
   * @type {Duration}
   * @private
   */
  _duration;

  /**
   * Creates a RaceResult object.
   * @param {string} participantId
   * @param {string} sportType
   * @param {Duration} duration
   */
  constructor(participantId, sportType, duration) {
    this._participantId = participantId;
    this._sportType = sportType;
    this._duration = duration;
  }

  get participantId() {
    return this._participantId;
  }

  get sportType() {
    return this._sportType;
  }

  get duration() {
    return this._duration;
  }

  }