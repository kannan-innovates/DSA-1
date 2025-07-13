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
          current.next = newNode;
          newNode.prev = current;
     }
     delete(data) {
          let current = this.head;

          if (current && current.data === data) {
               this.head = current.next;
               if (this.head) {
                    this.head.prev = null;
               }
               return;
          }

          while (current !== null) {
               if (current.data === data) {
                    current.prev.next = current.next;
                    if (current.next) {
                         current.next.prev = current.prev;
                    }
                    return;
               }
               current = current.next;
          }
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
[40, 30, 20, 10].forEach((val) => dll.append(val));
dll.delete(40);
dll.printList()

