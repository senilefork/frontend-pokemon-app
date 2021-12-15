
const getAbilities = (arr) => {
    let str = "";
    for(let el of arr){
      str += el.ability.name + " ";
    }
    return str;
  }

export default getAbilities;