const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];

  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);

  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
    static random(parcelCount = 5) {
      let parcels = [];
      for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
          place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
      }
      return new VillageState("Post Office", parcels);
    };
  }

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }

  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }

  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }
  
function compareRobots(robot1, memory1, robot2, memory2) {
    let robot1Sum = 0, robot2Sum = 0;
    const tasks = 1;
    for(let i = 0; i < tasks; ++i) {
      let state = VillageState.random();
      robot1Sum += runRobot(state, robot1, memory1);
      robot2Sum += runRobot(state, robot2, memory2);
    }
    console.log('robot1: ' + robot1Sum / tasks);
    console.log('robot2: ' + robot2Sum / tasks);
}


function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

  function myRobot({place, parcels}, route) {
    //place - current position string
    //parcels - {place: moved posttion, address: need user}   
    //route - adjacent list [array]
    if (route.length == 0) {
      let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          isPicked: true
        };
      }else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          isPicked: false
          };
      }});
      for (let route of routes) {
        route.includesDropOff = false;
        for (let parcel of parcels) {
          if (route.route.includes(parcel.address)) {
            route.includesDropOff = true;
          }
        }
      }
      function score({ route, isPicked, includesDropOff }) {
        return (isPicked ? 0.75 : 0) - (includesDropOff ? 0.75 : 0) - route.length;
      }
      route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
    }
    return {direction: route[0], memory:route.slice(1)} 
}

  compareRobots(myRobot, [], goalOrientedRobot, []);
