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
     insertAtBeginning(data) {
          let newNode = new Node(data);
          newNode.next = this.head;
          this.head = newNode;
     }
     printList(){
          let current = this.head;
          let result = "";
          while (current !== null){
               result += current.data + " -> ";
               current = current.next;
          }
          console.log(result + "null");
     }

}
let sll = new SinglyLinkedList();
sll.insertAtBeginning(30);
sll.insertAtBeginning(20);
sll.insertAtBeginning(10);
sll.printList();