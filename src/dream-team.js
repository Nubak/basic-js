import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(team) {
  let result = [];
    if (Array.isArray(team)){
    team.forEach (item => {
        if (typeof item == 'string'){
            item = item.trim();
            if (/^[A-Za-z]{1}/.test(item[0])) {
                result.push(item[0].toUpperCase()); 
            }
        }
    });
    }
 else{
     return false;
 }
 return result.sort().join('');
}
