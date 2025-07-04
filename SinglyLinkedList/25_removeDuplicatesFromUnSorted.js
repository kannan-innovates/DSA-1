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
          let newNode = new Node (data);

          if (this.head === null){
               this.head = newNode;
               return;
          }
          let current = this.head;

          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
     }
     removeDuplicatesUnSorted(){
          let current = this.head;
          let seen = new Set();
          let prev = null;
          while (current !== null){
               if (seen.has(current.data)){
                    prev.next = current.next;
               }else{
                    seen.add(current.data);
                    prev = current;
               }
               current = current.next;
          }
     }
}

let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(10);
list.append(30);
list.append(20);
list.removeDuplicatesUnSorted();