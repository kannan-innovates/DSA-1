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
          if (this.head === null) {
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current.next !== null) {
               current = current.next;
          }
          current.next = newNode;
     }
     deleteMiddle() {
          if (this.head === null || this.head.next === null) {
               this.head = null;
               return;
          }
          let slow = this.head;
          let fast = this.head;
          let prev = null;

          while (fast !== null && fast.next !== null) {
               prev = slow;
               slow = slow.next;
               fast = fast.next.next;
          }
          prev.next = slow.next;
     }
     printList() {
          let current = this.head;
          let result = "";
          while (current !== null) {
               result += current.data + " -> ";
               current = current.next;
          }
          console.log(result + "null");
     }
}
const sll = new SinglyLinkedList();
[10, 20, 30, 40, 50].forEach((val) => sll.append(val));

console.log("Before deleting middle:");
sll.printList();

sll.deleteMiddle();

console.log("After deleting middle:");
sll.printList();