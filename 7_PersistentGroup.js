class PGroup {
    constructor(array){
        this.array = array
    }
    static get empty(){
        return new PGroup([])
    }
    delete(element){
            let filterArray = []
            for (let i = 0; i < this.array.length; ++i){
                if(this.array[i] != element){
                    filterArray.push(this.array[i])
                }
            }
            return new PGroup(filterArray)
    }
    has(element){
        for(let i = 0; i< this.array.length; ++i){
            return this.array[i] === element ? true : false 
        }
    }
    add(element){
        if(!this.has(element)){
            this.array.push(element)
            return new PGroup(this.array)
        }
    }
}
  
  let a = PGroup.empty.add("a")
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b")); // → true
  console.log(a.has("b")); // → false
  console.log(b.has("a")); // → false