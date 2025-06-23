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
          }else{
                let current = this.head;
          while (current.next !== null){
               current = current.next;
          }
          current.next = newNode;
          }
         
     }
     printReverseUsingRecursion(node = this.head){
          if (node === null) return;
          this.printReverseUsingRecursion(node.next);
          console.log(node.data);
     }
}

let list = new SinglyLinkedList();
let array = [10,20,30,40];
for (let value of array){
     list.append(value)
}
list.printReverseUsingRecursion()