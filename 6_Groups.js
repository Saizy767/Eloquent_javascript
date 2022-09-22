class Group{
    constructor(array){
        this.array = array
    }
    static from(arrayTaken){
        return new Group(arrayTaken)
    }
    has(number){
        for(let i = 0; i< this.array.length; ++i){
            return this.array[i] === number ? 'true' : 'false' 
        }
    }
    add(number){
        if(!(this.has(number))){
            this.array.push(number)
        }
    }
    delete(number){
        let filterArray = []
        for (let i = 0; i < this.array.length; ++i){
            if(this.array[i] !== number){
                filterArray.push(this.array[i])
            }
        }
        return this.array = filterArray
    }
}

let group = Group.from([10,10,10,20]);
console.log(group)
console.log(group.has(10));// → true
console.log(group.has(30));// → false
group.add(10);
group.delete(10);
console.log(group)
console.log(group.has(10));// → false
