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
          while (current.next !== null) {
               current = current.next;
          }

          current.next = newNode;
     }
     findMiddle() {
          let slow = this.head;
          let fast = this.head;
          while (fast !== null && fast.next !== null) {
               slow = slow.next;
               fast = fast.next.next;
          }
          return slow?.data;
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
[10, 20, 30, 40, 50, 60].forEach(num => sll.append(num));

console.log("Middle Element:", sll.findMiddle());
