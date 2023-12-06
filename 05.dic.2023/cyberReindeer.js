function cyberReindeer(road, time) {
  // Code here
  const roadMovements = [road]; // initial road state
  for(let count = 1; count < time; count++) {
    let nextRoad = road.substring(road.lenght);
    roadMovements.push(nextRoad);
  }
  console.log(roadMovements);
  return roadMovements;
}
/*

*/
module.exports = cyberReindeer;
