function getName(node){
    return node.name
}

function headNode(list, hash){
    return hash[list]
}

function next(head, hash){
    return hash[head.next]
}

function nodeAt(num, head, hash){
    let node = head
    for(let count = 0; count < num; count++){
        node = hash[node].next
    }
    return hash[node]
}

function addressAt(num, head, hash){
    let node = head
    for(let count = 0; count < num; count++){
        node = hash[node].next
    }
    return node
}

function indexAt(node, list, head){
    let count = 0
    let check = head
    while(list[check] !== node){
        check = list[check].next
        count++
    }
    return count
}

function insertNodeAt(ind,value,head,list){
    let count = 0
    let node = head
    let prevNode
    while(count < ind){
        prevNode = node
        node = list[node].next
        count++
    }
    list[prevNode].next = value
    list[value].next = node
}

function deleteNodeAt(ind,head,list){
    let count = 0
    let node = head
    let prevNode
    while(count < ind){
        prevNode = node
        node = list[node].next
        count++
    }
    let nextNode = list[node].next
    list[node].next = ''
    list[prevNode].next = nextNode
}