     class Node {
          constructor(data) {
               this.data = data;
               this.next = null;
          }
     }
     class SinglyLinkedList {
          constructor(head) {
               this.head = null;
          }
          insertAtPosition(pos, data) {
               let newNode = new Node(data);
               if (pos === 0 || this.head === null) {
                    newNode.next = this.head;
                    this.head = newNode;
                    return;
               }

               let index = 0;
               let current = this.head;
               let prev = null;

               while (current !== null && index < pos) {
                    prev = current;
                    current = current.next;
                    index++;
               }
               if (index !== pos ){
                    console.log("Position out of bounds.!");
                    return;   
               }
               newNode.next = current;
               prev.next = newNode;
          }

          printList(){
               let current = this.head;
               let result = "";
               while (current !== null){
                    result += current.data + " -> "
                    current = current.next;
               }
               console.log(result + "null");
          }
     }
     let sll = new SinglyLinkedList();
     sll.insertAtPosition(0,10);
     sll.insertAtPosition(1,20);
     sll.insertAtPosition(2,30);
     sll.printList()