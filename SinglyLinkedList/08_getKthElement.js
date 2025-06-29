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
     findLength(){
          let count = 0;
          let current = this.head;
          while (current !== null){
               count++;
               current = current.next;
          }
          return count;
     }
     getKthElement(k){
          if (this.head === null){
               console.log("List is Empty.!");
               return;
          }
          if (k < 0){
               let length = this.findLength();
               k += length;
          }
          let index = 0;
          let current = this.head;
          
          while (current!== null && index < k){
               current = current.next;
               index++;
          }
          if (current === null){
               console.log("Position out of bounds.!");
               return;
          }
          return current.data;
     }
     printList(){
          let current = this.head;
          let result = "";
          while (current !== null){
               result += current.data + " -> ";
               current = current.next;
          }
          console.log(result = "null");
     }
}
let sll = new SinglyLinkedList();
[10, 20, 30, 40].forEach(val => sll.append(val));

console.log("Element at Position 2 :",sll.getKthElement(2));
console.log("Element at position -1 (last):", sll.getKthElement(-1));