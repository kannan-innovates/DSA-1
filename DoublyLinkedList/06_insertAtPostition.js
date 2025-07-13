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
     }
     append(data) {
          let newNode = new Node(data);
          if (this.head === null) {
               this.head = newNode;
               return;
          }
          let current = this.head;

          while (current.next !== null) {
               current = current.next;
          }
          newNode.prev = current;
          current.next = newNode;

     }
     insertAtPosition(pos, data) {
          let newNode = new Node(data);

          if (pos === 0) {
               newNode.next = this.head;
               this.head.prev = newNode;
               this.head = newNode;
               return;
          }

          let current = this.head;
          let index = 0;

          while (current !== null && index < pos) {
               current = current.next;
               index++;
          }
          if (current === null) {
               let last = this.head;

               while (last.next !== null) {
                    last = last.next;
               }
               last.next = newNode;
               newNode.prev = last;
               return;
          }
          let previous = current.prev;

          newNode.next = current;
          previous.next = newNode;

          current.prev = newNode;
          newNode.prev = previous
     }
     printList() {
          let current = this.head;

          while (current !== null) {
               console.log(current.data);
               current = current.next;
          }
     }
}
const dll = new DoublyLinkedList();
[10, 20, 30, 40].forEach((val) => dll.append(val));
dll.insertAtPosition(4, 999);
dll.printList()