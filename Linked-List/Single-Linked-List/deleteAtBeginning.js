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
          let newNode = new Node(data);
          if(this.head === null){
               this.head = newNode;
          }else{
               let current = this.head;
               while(current.next !== null){
                    current = current.next;
               }
               current.next = newNode;
          }
     }
     deleteAtBeginning(){
          if (this.head === null){
               console.log("List is empty!");
               return;
          }
          console.log(`Deleting the value at the beginning ${this.head.data}`)
          this.head = this.head.next;   
     }
     printList(){
          let current = this.head;
          while (current !== null){
               console.log(current.data);
               current = current.next;
          }
     }
}
let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();
list.deleteAtBeginning();
list.printList()