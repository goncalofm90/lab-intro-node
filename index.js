class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  if(this.items.length){
    this.items.sort(function(a, b){
      return a - b;
      });
    }
    this.length = this.items.length;
  }

  get(pos) {
     if(pos <= this.length) {
    return this.items[pos];
  }else {
    throw new Error('OutOfBounds');
  }

}

  max() {
    if(this.length){
    return Math.max(...this.items);
    }else {
      throw new Error('EmptySortedList');

    }
  }

  min() {
    if(this.length){
      return Math.min(...this.items);
      }else {
        throw new Error('EmptySortedList');
  
      }
  }

  sum() {
  const arrClone = [...this.items];
  const sum = arrClone.reduce((a, b) => a + b, 0);
  return sum;
  }

  avg() {
    if(this.length){
      const arrClone = [...this.items];
      const sum = arrClone.reduce((a, b) => a + b, 0);
      return sum/this.items.length;
    }else {
      throw new Error('OutOfBounds');
    }
  }
}

module.exports = SortedList;
