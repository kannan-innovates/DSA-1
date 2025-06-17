class Node {
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
     insertAtBeginning(data){
          let newNode = new Node(data);
          newNode.next = this.head;
          this.head =newNode;
     }
     printList(){
          let current = this.head;
          while(current!== null){
               console.log(current.data);
               current = current.next;
          }
          
     }
     
     
}
let list = new SinglyLinkedList();
let array = [10,20,30];
for (let values of array){
     list.append(values)
}
list.insertAtBeginning(5)
list.printList()
