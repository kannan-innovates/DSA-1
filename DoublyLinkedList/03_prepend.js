class Node{
     constructor(data){
          this.data = data;
          this.next = null;
          this.prev = null;
     }
}
class DoublyLinkedList{
     constructor(){
          this.head = null;
     }
     prepend(data){
          let newNode = new Node (data);

          if (this.head === null){
               this.head = newNode;
               return;
          }
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
     }
     printList(){
          let current = this.head;

          while (current !== null){
               console.log( current.data);
               current = current.next;
          }
     }
}

const dll = new DoublyLinkedList();
[40,30,20,10].forEach((val) => dll.prepend(val));
dll.printList()