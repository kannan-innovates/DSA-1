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
     findNthFromEnd(n) {
          let slow = this.head;
          let fast = this.head;
          for (let i = 0; i < n; i++) {
               if (fast === null) {
                    console.log(`${n} is larger than index;`);
                    return;
               }
               fast = fast.next;
          }
          while (fast !== null) {
               slow = slow.next;
               fast = fast.next;
          }
          return slow.data;
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

console.log(sll.findNthFromEnd(2));

sll.printList()