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
                    return;
               }
               let current = this.head;
               while (current.next !== null) {
                    current = current.next;
               }
               current.next = newNode;
          }
          deleteByValue(target) {
               if (this.head === null) {
                    console.log("List is Empty.!");
                    return;
               }
               if (this.head.data === target) {
                    this.head = this.head.next;
                    return;
               }
               let current = this.head;
               let prev = null;

               while (current !== null && current.data !== target) {
                    prev = current;
                    current = current.next
               }
               if (current === null) {
                    console.log(`Value ${target} not found in the list.!`);
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
     [10,20,30,40].forEach((value) => sll.append(value));

     console.log("Before Deletion:");
     sll.printList();

     sll.deleteByValue(30);

     console.log("After Deleting 30:");
     sll.printList();