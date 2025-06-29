class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList {
     constructor(head) {
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
     }
     deleteFromEnd() {
          if (this.head === null) {
               console.log("List is Empty");
               return;
          }
          if (this.head.next === null) {
               this.head = null;
               return;
          }
          let current = this.head;
          let prev = null;
          while (current.next !== null) {
               prev = current;
               current = current.next;
          }
          prev.next = null
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
[10, 20, 30, 40].forEach((val) => sll.append(val));

console.log("Before Deletion:");
sll.printList();

sll.deleteFromEnd();

console.log("After Deletion:");
sll.printList();