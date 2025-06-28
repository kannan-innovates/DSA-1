class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(head){
          this.head = null;
     }
     append(data){
          let newNode = new Node(data);
          if (this.head === null){
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
     }
     printList(){
          let current = this.head;
          let result = "";
          while (current !== null){
               result +=  current.data + " -> ";
               current = current.next;
          }
          console.log(result + "null");
     }
}

let sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
sll.printList()