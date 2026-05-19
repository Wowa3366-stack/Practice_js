const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];



const totalTimePlayed = players.reduce((acc, item) => {
return acc + item.timePlayed
 }, 0)
console.log(totalTimePlayed);

const arrayAllName = players.reduce((acc, item) => {
    return acc + " " + item.name
}, "")

console.log(arrayAllName);



const playersTimePlayedObj = players.reduce((acc, item) => {
return {
...acc,
[item.name]: item.timePlayed,
}
}, {})
console.log(playersTimePlayedObj);


const playerSortedByPoints = players.toSorted((a, b) =>{
return a.points - b.points //В порядку зростання
})
.map((item) => {
  return item.name
})
console.log(playerSortedByPoints);

const sortedByWorthPlayers = players.toSorted((a, b) => {
    return b.points - a.points
})
.map((item) => {
  return item.name
})
console.log(sortedByWorthPlayers);


const planets = ["Earth", "Mars", "Venus", "Jupiter"];


const inAlphabeticalorder = players.toSorted((a, b) => {
return a.name.localeCompare(b.name)
})
.map(item => item.name)
console.log(inAlphabeticalorder);

const planetsInReverseOrder = planets.toSorted((a, b) => {
    return b.localeCompare(a)
})
console.log(planetsInReverseOrder);
