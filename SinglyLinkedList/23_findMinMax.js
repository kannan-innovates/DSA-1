class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  findMinMax() {
    if (!this.head) {
      console.log("List is empty!");
      return;
    }

    let min = this.head.data;
    let max = this.head.data;
    let current = this.head;

    while (current) {
      if (current.data < min) min = current.data;
      if (current.data > max) max = current.data;
      current = current.next;
    }

    console.log("Min:", min, "Max:", max);
    return { min, max };
  }
}

// Test
const sll = new SinglyLinkedList();
[10, 5, 30, 2, 99].forEach(val => sll.append(val));
sll.findMinMax(); 