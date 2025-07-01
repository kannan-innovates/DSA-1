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
     deleteAllByValue(target) {
          if (this.head === null) {
               console.log("List is Empty.!");
               return;
          }
          while (this.head !== null && this.head.data === target) {
               this.head = this.head.next;
          }
          let current = this.head;

          while (current !== null && current.next !== null) {
               if (current.next.data === target) {
                    current.next = current.next.next;
               } else {
                    current = current.next;
               }
          }
     }
     printList() {
          let current = this.head;
          let result = "";
          while (current) {
               result += current.data + " -> ";
               current = current.next;
          }
          console.log(result + "null");
     }
}

const sll = new SinglyLinkedList();
[10, 20, 20, 30, 20, 40, 20, 50].forEach(val => sll.append(val));
sll.printList();
sll.deleteAllByValue(20);
sll.printList();