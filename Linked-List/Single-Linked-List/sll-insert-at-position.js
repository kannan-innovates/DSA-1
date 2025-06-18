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
  insertAtPosition(pos, data) {
     let newNode = new Node(data)
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let index = 0;

    while (index < pos - 1 && current !== null) {
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log(`Position is out bonus`);
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  printList(){
     let current = this.head;
     while(current !== null){
          console.log(current.data);
          current = current.next;
     }
  }
  toArray(){
     let result = [];
     let current = this.head;
     while (current!==null){
          result.push(current.data);
          current = current.next;
     }
     return result;
          
  }
}

let list = new SinglyLinkedList();
list.append(10);
list.append(25);
list.insertAtPosition(1,15);
list.insertAtPosition(2,20)
list.printList()
console.log(list.toArray())
