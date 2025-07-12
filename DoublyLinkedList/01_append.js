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
     append(data){
          let newNode = new Node (data);

          if (this.head === null){
               this.head = newNode;
               return;
          }

          let current = this.head;

          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
          newNode.prev = current;
     }

     printList(){
          let current = this.head;

          while (current !== null){
               console.log(current.data);
               current = current.next;
          }
     }
}

let dll = new DoublyLinkedList();
[10,20,30,40].forEach((val) => dll.append(val));
dll.printList()