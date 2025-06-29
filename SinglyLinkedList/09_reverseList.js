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
     reverseList() {
          let prev = null;
          let current = this.head;
          let next = null;

          while (current !== null) {
               next = current.next;
               current.next = prev;
               prev = current;
               current = next;
          }
          this.head = prev;

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
[10,20,30,40].forEach((val) => sll.append(val));
console.log("Before Reversing: ");
sll.printList();
console.log("After Reversing : ");
sll.reverseList();
sll.printList()