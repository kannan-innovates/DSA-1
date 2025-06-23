class Node{
     constructor(data){
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(){
          this.head = null;
     }
     insertAtBeginning(data){
          let newNode = new Node(data);
          newNode.next =  this.head;
          this.head = newNode;
     }
     printList(){
          let current = this.head;
          while(current !== null){
               console.log(current.data);
               current = current.next;
          }
     }
}
let list = new SinglyLinkedList();
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.printList()
