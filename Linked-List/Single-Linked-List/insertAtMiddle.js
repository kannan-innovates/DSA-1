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
          if (this.head === null){
               this.head = newNode;
               this.tail = newNode;
          }else{
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }
     insertAtPosition(pos,data){
          let newNode = new Node(data);
          if (pos === 0 ){
               newNode.next = this.head;
               this.head = newNode;
               return;
          }
          let current = this.head;
          let index = 0;
          while(index < pos - 1 && current!== null){
               current = current.next;
               index++;
          }
          if (current === null){
               console.log("Position is out of bounds!");
               return;
          }
          newNode.next = current.next;
          current.next = newNode;
     }
     toArray(){
          let arr = []
          let current = this.head;
          while(current !== null){
               arr.push(current.data);
               current = current.next;
          }
          return arr;
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
list.append(40);
let listLength = list.toArray().length;
let midPos = Math.floor(listLength/2);
list.insertAtPosition(midPos,25)
list.printList()
