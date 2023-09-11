class SimpleNode<T> {
  public value: T;
  public next: SimpleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: SimpleNode<T> | null;
  private tail: SimpleNode<T> | null;
  private length: number;

  constructor(value: T) {
    const newNode = new SimpleNode<T>(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value: T) {
    const newNode = new SimpleNode<T>(value);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let temp = this.head;
    let previous = this.head;

    while (temp.next) {
      previous = temp;
      temp = temp.next;
    }

    this.tail = previous;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp.value;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshifted(value);

    const newNode = new SimpleNode(value);
    const temp = this.get(index - 1);
    newNode.next = temp!.next;
    temp!.next = newNode;
    this.length++;
    return true;
  }

  shift() {
    if (!this.head) return;
    const temp = this.head;
    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return temp.value;
  }

  unshifted(value: T) {
    const newNode = new SimpleNode<T>(value);

    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }
    return temp;
  }

  set(index: number, value: T) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    const prev = this.get(index - 1);
    const temp = prev?.next;
    prev!.next = temp?.next ?? null;
    temp!.next = null;

    this.length--;
    return true;
  }

  reverse() {
    if (!this.head || this.length === 1) {
      return this;
    }

    let prev = null;
    let current = this.head;
    let nextNode = null;

    while (current) {
      nextNode = current.next;

      current.next = prev;

      prev = current;
      current = nextNode!;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }

  toString() {
    let str = '';
    let curr = this.head;

    while (curr) {
      str += `${curr.value} -> `;
      curr = curr.next;
    }

    str = str.slice(0, -4);

    return `LinkedList: { ${str} }`;
  }
}

export default LinkedList;
