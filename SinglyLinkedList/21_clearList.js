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
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    clearList() {
        this.head = null;
    }

    printList() {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// ✅ Test
const sll = new SinglyLinkedList();
sll.append(1);
sll.append(2);
sll.append(3);
sll.printList();   
sll.clearList();
sll.printList();  