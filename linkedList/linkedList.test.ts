import LinkedList from './linkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList(1);
  });

  it('should create a new linked list with one element', () => {
    expect(list.toString()).toBe('LinkedList: { 1 }');
  });

  it('should push elements to the end of the list', () => {
    list.push(2).push(3);
    expect(list.toString()).toBe('LinkedList: { 1 -> 2 -> 3 }');
  });

  it('should pop elements from the end of the list', () => {
    list.push(2).push(3);
    const popped = list.pop();
    expect(popped).toBe(3);
    expect(list.toString()).toBe('LinkedList: { 1 -> 2 }');
  });

  it('should insert an element at a specific index', () => {
    list.push(2).push(3).push(5);
    list.insert(2, 4);
    expect(list.toString()).toBe('LinkedList: { 1 -> 2 -> 4 -> 3 -> 5 }');
  });

  it('should shift an element from the beginning of the list', () => {
    list.push(2).push(3);
    const shifted = list.shift();
    expect(shifted).toBe(1);
    expect(list.toString()).toBe('LinkedList: { 2 -> 3 }');
  });

  it('should unshift an element to the beginning of the list', () => {
    list.push(2).push(3);
    list.unshifted(0);
    expect(list.toString()).toBe('LinkedList: { 0 -> 1 -> 2 -> 3 }');
  });

  it('should get an element at a specific index', () => {
    list.push(2).push(3).push(4);
    const element = list.get(1);
    expect(element?.value).toBe(2);
  });

  it('should set the value of an element at a specific index', () => {
    list.push(2).push(3).push(4);
    const updated = list.set(1, 5);
    expect(updated).toBe(true);
    expect(list.toString()).toBe('LinkedList: { 1 -> 5 -> 3 -> 4 }');
  });

  it('should remove an element at a specific index', () => {
    list.push(2).push(3).push(4);
    list.remove(1);
    expect(list.toString()).toBe('LinkedList: { 1 -> 3 -> 4 }');
  });

  it('should reverse the linked list', () => {
    list.push(2).push(3).push(4);
    list.reverse();
    expect(list.toString()).toBe('LinkedList: { 4 -> 3 -> 2 -> 1 }');
  });
});
