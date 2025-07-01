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
          while (current.next) {
               current = current.next;
          }
          current.next = newNode;
     }
     searchElement(target){
          let index = 0;
          let current = this.head;

          while (current !== null){
               if (current.data === target){
                    return index;
               }
               current = current.next;
               index++;
          }
          return -1;
     }
}
const sll = new SinglyLinkedList();
[10, 20, 30, 40, 50].forEach(val => sll.append(val));
console.log("Index of 30:", sll.searchElement(30)); 
console.log("Index of 100:", sll.searchElement(100)); 