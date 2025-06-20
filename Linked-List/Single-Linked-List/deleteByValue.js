class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}
class SinglyLinkedList {
     constructor(head) {
          this.head = null;
          this.tail = null;
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
     deleteByValue(data) {
          let newNode = new Node(data);
          if (this.head === null) {
               console.log('List is empty!');
               return;
          }
          if (this.head.data === data) {
               this.head = this.head.next;
               return;
          }
          let current = this.head;
          while (current.next !== null && current.next.data !== data) {
               current = current.next;
          }
          if (current.next !== null) {
               console.log(`Deleting ${data} from the list!`);
               current.next = current.next.next
          }else{
               console.log('Value not found in the list')
          }
     }
     printList(){
          let current = this.head;
          while (current !== null){
               console.log(current.data);
               current = current.next;
          }
     }
}
let list = new SinglyLinkedList()
list.append(10);
list.append(20);
list.append(30);
list.printList();
list.deleteByValue(20);
list.printList()