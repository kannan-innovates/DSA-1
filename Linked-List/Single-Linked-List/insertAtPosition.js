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
     insertAtPosition(pos,data){
          let newNode = new Node(data);
          if (pos === 0){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          let index = 0;
          while(index < pos-1 && current !== null){
               current = current.next;
               index++;
          }
          if(current === null){
               console.log('Position out of bounds!');
               return;
          }
          newNode.next = current.next;
          current.next = newNode;
     }
     printList(){
          let current = this.head;
          while (current !== null){
               console.log (current.data);
               current = current.next;
          }
     }
}
let list = new SinglyLinkedList();
let array = [10,20,30];
for (let value of array){
     list.append(value)
}
list.insertAtPosition(2,99);
list.printList()