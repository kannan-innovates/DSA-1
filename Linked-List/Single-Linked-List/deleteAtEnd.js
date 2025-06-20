class Node{
     constructor(data){
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(head){
          this.head = null;
          this.tail = null;
     }
     append(data){
          let newNode = new Node(data);
          if(this.head === null){
               this.head = newNode;
               this.tail = newNode;
          }else{
               newNode.next = this.tail;
               this.tail.next
          }
     }
     deleteAtEnd(){
          if(this.head === null){
               console.log("List is Empty!");
               return;
          }
          if(this.head.next === null){
               this.head = null;
               return;
          }
          let current = this.head;
          while(current.next.next !== null){
               current = current.next;
          }
          current.next = null;
     }
}