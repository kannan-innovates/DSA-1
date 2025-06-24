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
     findMiddle(){
          let slow = this.head;
          let fast = this.head;
          while(fast !== null && fast.next !== null){
               slow = slow.next;
               fast = fast.next.next;
          }
          console.log(`Middle is : ${slow.data}`)
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
let array = [10,20,30,40];
for (let value of array){
     list.append(value);
}
list.printList();
list.findMiddle()