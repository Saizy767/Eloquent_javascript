class Group{
    constructor(array){
        this.array = array
    }
    static from(arrayTaken){
        return new Group(arrayTaken)
    }
    [Symbol.iterator](){
        let index = -1;
        return {
            next: () => ({ value: this.array[++index], done: !(index in this.array) })
          };
    }
    
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c