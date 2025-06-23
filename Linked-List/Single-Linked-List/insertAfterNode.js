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
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }
     insertAfterNode(targetData, newData) {
          let newNode = new Node(newData);
          if (this.head.data === targetData) {
               newNode.next = this.head.next;
               this.head.next = newNode;
               return
          }
          let current = this.head;
          while (current !== null) {
               if (current.data === targetData) {
                    newNode.next = current.next;
                    current.next = newNode;
                    return;
               }
               current = current.next;
          }
     }
     printList() {
          let current = this.head;
          while (current !== null) {
               console.log(current.data);
               current = current.next;
          }

     }
}
let list = new SinglyLinkedList();
list.append(10);
list.append(30)
list.insertAfterNode(10, 20);
list.printList()