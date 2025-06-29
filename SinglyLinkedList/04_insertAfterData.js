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
          let newNode = new Node (data);
          if (this.head === null){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
     }
     insertAfterData(targetData,newData){
          let newNode = new Node (newData);
          
          if (this.head.data === targetData){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          while (current !== null && current.data !== targetData){
               current = current.next;
          }
          if (current === null){
               console.log("Target Data cannot be found.!");
               return;
          }
          newNode.next = current.next;
          current.next = newNode;
     }
     printList(){
          let current = this.head;
          let result = ""
          while (current !== null){
               result += current.data + " -> ";
               current = current.next;
          }
          console.log(result + "null")
     }
}

let sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
sll.insertAfterData(20,99);
sll.printList()