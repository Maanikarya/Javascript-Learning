"use strict";

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
    }

    addFirst(data){
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        let newNode = new Node(data);
        if(this.head){
            let current = this.head;
            while(current.next){
                current = current.next; 
            }
            current.next = newNode;
        }else{
            this.head = newNode;
        }
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }

        return count;
    }

    addAt(index,data){
        if(index < 0 || index > this.size()){
            console.error("Invalid input");
        }

        let newNode = new Node(data);

        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;

        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeTop(){
        if(!this.head){
            return
        }

        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return
        }
        
        let current = this.head;
        while(current.next.next){
            current = current.next; 
        }
        current.next = null;
    }

    removeAt(index){
        if(index < 0 || index>this.size()){
            console.log("Index is Invalid")
            return
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
        }
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


let linkedlist = new Linkedlist()
linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(10);
linkedlist.addAt(2,30);
// linkedlist.removeLast()
// linkedlist.removeTop()
linkedlist.removeAt(2)
console.log(
    `size = ${linkedlist.size(10)}`
)

linkedlist.print();

