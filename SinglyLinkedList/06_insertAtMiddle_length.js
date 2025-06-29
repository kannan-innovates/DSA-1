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
     findLength() {
          let current = this.head;
          let count = 0;
          while (current !== null) {
               count++;
               current = current.next;
          }
          return count;
     }
     insertAtPosition(pos, data) {
          let newNode = new Node(data);
          if (pos === 0 || this.head === null) {
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let index = 0;
          let current = this.head;
          let prev = null;

          while (current !== null && index < pos) {
               prev = current;
               current = current.next;
               index++;
          }
          if (index !== pos) {
               console.log("Position out of bounds.!");
               return;
          }
          newNode.next = current;
          prev.next = newNode;
     }
     insertAtMiddle(data) {
          let length = this.findLength();
          let middle = Math.floor(length / 2);
          this.insertAtPosition(middle, data);
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
let sll = new SinglyLinkedList();
let arr = [10,20,30,40];
for (let value of arr){
     sll.append(value);
}
sll.insertAtMiddle(777);
sll.printList();