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