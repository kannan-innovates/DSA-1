class Node{
     constructor(data){
          this.data = data;
          this.next =null
     }
}
class SinglyLinkedList{
     constructor(head){
          this.head = null;
     }
     append(data){
          let newNode = new Node (data);
          if (this.head === null){
               this.head = newNode;
               return
          }
          let current = this.head;
          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
     }
     deleteAtPosition(pos){
          if (this.head === null){
               console.log("List is Empty.!");
               return;
          }
          if (pos === 0){
               this.head = this.head.next;
               return;
          }
          let current = this.head;
          let prev = null;
          let index = 0;

          while (current !== null && index < pos){
               prev = current;
               current = current.next;
               index++;
          }
          if (current === null){
               console.log("Position is out of bounds.!");
               return;
          }
          prev.next = current.next;

     }
     printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const sll = new SinglyLinkedList();
[10, 20, 30, 40, 50].forEach((val) => sll.append(val));

console.log("Before deletion:");
sll.printList();

sll.deleteAtPosition(2); // deletes 30

console.log("After deleting at position 2:");
sll.printList();