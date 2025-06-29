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
     insertAtMiddleTwoPointer(data) {
          let newNode = new Node(data);

          let slow = this.head;
          let fast = this.head;
          let prev = null;

          while (fast !== null && fast.next !== null) {
               prev = slow;
               slow = slow.next;
               fast = fast.next.next;
          }
          newNode.next = slow;
          prev.next = newNode;
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
[10, 20, 30, 40].forEach(val => sll.append(val));
sll.insertAtMiddleTwoPointer(777); 
sll.printList();