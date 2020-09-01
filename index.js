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
    for (let i = index; i > 0; i--) {
        next(node, collection)
    }
    return
}