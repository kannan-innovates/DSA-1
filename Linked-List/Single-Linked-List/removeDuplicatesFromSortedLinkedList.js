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
          let newNode = new Node(data);
          if (this.head === null) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }
     removeDuplicates() {
          let current = this.head;
          while (current !== null && current.next !== null) {
               if (current.data === current.next.data) {
                    current.next = current.next.next
               } else {
                    current = current.next
               }

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

let list = new SinglyLinkedList();
let array = [10, 10, 20, 20, 30, 30];
for (let value of array) {
     list.append(value);
}
console.log("Before removing duplicates:");
list.printList();

list.removeDuplicates();

console.log("After removing duplicates:");
list.printList();