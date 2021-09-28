// need to create a linkedList. a linked list starts with the "head", which is the first "node". 
// each node has a .next value. this "points" the list at the next "node" that comes in that list.
// every node is an objects that contains an "element" and a "next" property.
// the last node in the chain returns a null for the "next" value.

// the list can also have a size variable that is seperate from the objects within it.
// can use while and for loops to iterate to a certain value in the list.


// Can now initialize a new list and add values to it.
var myList = new linkedList();


let Node = function() {
        // value at this node.
        this.value = value;
        // next node in chain (defaults to null (list will end on null)). 
        // This is setting a "pointer" for the list to locate the next node. Setting this value to another node is how it finds the node. Chains nodes together.
        this.next = null;
}

let linkedList = function() {
    // don't need to pass anything in when building a "new" list
        // start with the head which can be set to null at the start
        this.head = null;
        // every list will want a size variable that can be manipulated. Defaults to 0
        this.size = 0;
}

    // need to be able to add nodes to my list with a function.
    linkedList.prototype.addAtEnd = function(value) {
        // create a node object here. pass value into node.
        let nodeChan = new Node(value);

        // need to save the current "node" that is present at the location we are adding this.
        let nodeSamaOwO;

        // replace current head if it is empty, since list is empty.
        if (this.head == null) {
            this.head = nodeChan;
        }
        else {
            // Putting our iteration variable at the start of the list
            nodeSamaOwO = this.head

            // move through the list with some sort of function
            for (let i = 0; i < this.size; i++) {
                nodeSamaOwO = nodeSamaOwO.next;
            }

            // when we have reached the end of the list we add the node we made.
            nodeSamaOwO.next = nodeChan;
        }
        // list should be 1 longer since we are done and need to update the size.
        this.size+= 1;
    }

    // put in a node at a specific index.
    // take in node value and a specified index location that is stored in a var.
    linkedList.prototype.addAtIndex = function(value,index) {
        // build a node with our value intake, initalize the object I created.
        let nodeChan = new Node(value);
        // iteration var needs to exist to go through list.
        let nodeSamaOwO = this.head;

        // take in our index var
        let position = index;

        // iterate through the loop starting at the top.
        for (let i = 0; i < position; i++) {
            // set to the .next value that points to the next node in the list
            nodeSamaOwO = nodeSamaOwO.next;
            // does this until we are done.
        }
        // once we reach the end of the for loop, we change the stored node to the desired node.
        // set next to maintain chain.
        nodeChan.next = nodeSamaOwO.next;
        // replace old node with new node.
        nodeSamaOwO = nodeChan;
        // increase size of list.
        this.size += 1;
    }

    // take in specified index location that is stored in a var.
    linkedList.prototype.deleteAtIndex = function(index) {
        // iteration var needs to exist to go through list.
        let nodeSamaOwO = this.head;
        // var to save last node to fix.
        let nodeuwu;

        // take in our index var
        let position = index;

        // iterate through the loop starting at the top.
        for (let i = 0; i < position; i++) {
            // save prior node for changing pointer later.
            nodeuwu = nodeSamaOwO;
            // set to the .next value that points to the next node in the list
            nodeSamaOwO = nodeSamaOwO.next;
            // does this until we are done.
        }
        // can change the pointers to remove the node from the list.
        nodeuwu.next = nodeSamaOwO.next;
        // once we have our node at the index that we want to delete, we need to remove it and repoint the list. Does the node just cease to exist or is it taking up memory still?
        // decrease size of list.
        this.size -= 1;
    }

        // take in specified index location that is stored in a var.
        linkedList.prototype.getAtIndex = function(index) {
            // iteration var needs to exist to go through list.
            let nodeSamaOwO = this.head;
    
            // take in our index var
            let position = index;
    
            // iterate through the loop starting at the top.
            for (let i = 0; i < position; i++) {
                // set to the .next value that points to the next node in the list
                nodeSamaOwO = nodeSamaOwO.next;
                // does this until we are done.
            }
            // return node value at end of loop.
            return nodeSamaOwO;
            // no change to size
        }