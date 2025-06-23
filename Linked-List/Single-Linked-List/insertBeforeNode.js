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
     insertBeforeNode(targetData,newData){
          let newNode = new Node(newData);
          if(this.head === null){
               console.log("List is empty!");
               return;
          }
          if(this.head.data === targetData){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current.next !== null){
               if(current.next.data === targetData){
                    newNode.next = current.next;
                    current.next = newNode;
                    return
               }
               current = current.next
          }
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
list.append(10);
list.append(20);
list.append(30);
list.insertBeforeNode(20,15)
list.printList()