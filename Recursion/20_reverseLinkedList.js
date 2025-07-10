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
          this.head = this.reverseRecursively(this.head)
     }

     reverseRecursively(head = this.head) {
          if (head === null || head.next === null) return head;

          let newHead = this.reverseRecursively(head.next);

          head.next.next = head;
          head.next = null;

          return newHead;
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
[10, 20, 30, 40].forEach((val) => sll.append(val));
sll.reverseList();
sll.printList()