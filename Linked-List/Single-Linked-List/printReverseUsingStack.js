class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList {
     constructor() {
          this.head = null;
     }
     append(data) {
          let newNode = new Node(data);
          if (this.head === null) {
               this.head = newNode;
          } else {
               let current = this.head;
               while (current.next !== null) {
                    current = current.next;
               }
               current.next = newNode;
          }
     }
     printReverseUsingStack(){
          let stack = [];
          let current = this.head;
          while (current !== null){
               stack.push(current.data);
               current = current.next;
          }
          while (stack.length > 0){
               console.log(stack.pop())
          }
     }

}

let list = new SinglyLinkedList();
let array = [10,20,30,40];
for (let value of array){
     list.append(value)
}
list.printReverseUsingStack();