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
     deleteFromBeginning() {
          if (this.head === null) {
               console.log("list is Empty.!");
               return;
          }
          this.head = this.head.next;
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

console.log("Before Deletion :");
sll.printList()
sll.deleteFromBeginning();
console.log("After Deletion :");
sll.printList()