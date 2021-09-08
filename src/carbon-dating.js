import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleAct) {
  if(typeof sampleAct !== 'string') return false;
  let sampleAct1 = parseFloat(sampleAct);
 let time = (0.693 / HALF_LIFE_PERIOD);
 let activity = Math.log(MODERN_ACTIVITY / sampleAct1);
 if(sampleAct1 <= 0 || sampleAct1 > MODERN_ACTIVITY || isNaN(sampleAct1)) return false;
 return Math.ceil(activity/time);
}
