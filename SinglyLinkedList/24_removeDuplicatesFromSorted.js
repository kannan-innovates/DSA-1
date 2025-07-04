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
               return;
          }
          let current = this.head;
          while (current.next !== null) {
               current = current.next;
          }
          current.next = newNode;
     }
     removeDuplicatesFromSorted() {
          let current = this.head;

          while (current !== null && current.next !== null) {
               if (current.data === current.next.data) {
                    current.next = current.next.next;
               } else {
                    current = current.next;
               }

          }
     }
     printList(){
          let current = this.head;
          let result = ""
          while (current !== null){
               result += current.data + ' -> ';
               current = current.next;
          }
          console.log(result + "null");
     }
}
let sll = new SinglyLinkedList();
[10, 20, 20, 30, 30, 30, 40, 50, 50].forEach(val => sll.append(val));

console.log("Before:");
sll.printList();

sll.removeDuplicatesFromSorted();

console.log("After:");
sll.printList();