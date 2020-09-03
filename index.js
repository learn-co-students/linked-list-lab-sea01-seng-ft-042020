function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}

function nodeAt(index, node, collection) {
    let current = headNode(node, collection);
    for(let i = 0; i < index; i++){
        current = next(current, collection);
    }
    return current;
}

function addressAt(index, node, collection){
    if(index == 0){
        return node
    } else {
        let thisNode = nodeAt(index-1, node, collection)
        return thisNode.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
        currentIdx++
        currentNode = next(currentNode, collection)
    }
    return currentIdx
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
}