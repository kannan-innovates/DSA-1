class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
          this.prev = null;
     }
}
class DoublyLinkedList {
     constructor() {
          this.head = null;
          this.tail = null;
     }
     append(data) {
          let newNode = new Node(data);
          if (this.head === null) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               newNode.prev = this.tail;
               this.tail = newNode;
          }
     }
     printForward() {
          let current = this.head;
          while (current !== null) {
               console.log(current.data);
               current = current.next;
          }
     }
     printReverse() {
          let current = this.tail;
          while (current !== null) {
               console.log(current.data);
               current = current.prev;
          }
     }

}
let dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();
dll.printReverse();