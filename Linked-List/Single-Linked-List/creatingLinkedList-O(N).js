class Node{
     constructor(data){
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(head){
          this.head = null;
     }
     append(data){
          let newNode = new Node(data)
          if (this.head === null){
               this.head = newNode;
               this.tail = newNode;
          }else{
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }
     printList(){
          let current = this.head;
          while( current !== null){
               console.log(current.data);
               current = current.next;
          }

     }
}
let list = new SinglyLinkedList()
list.append(10);
list.append(20);
list.append(20);
list.printList()