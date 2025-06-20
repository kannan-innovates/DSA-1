class Node{
     constructor(data){
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(){
          this.head = null;
          this.tail = null;
     }
     append(data){
          let newNode = new Node(data);
          if(this.head === null){
               this.head = newNode;
               this.tail = newNode;
          }else{
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }
     deleteByPosition(pos){
          if(this.head === null){
               console.log("List is Empty !");
               return;
          }
          if(pos === 0){
               this.head = this.head.next;
               return;
          }
          let current = this.head;
          let index = 0;
          while(index < pos - 1 && current !== null){
               current = current.next;
               index++;
          }
          if(current === null || current.next === null){
               console.log("Position is out of bounds!");
               return;
          }
          console.log(`Deleting the data at ${pos}`)
          current.next = current.next.next;
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
list.deleteByPosition(2);
list.printList();