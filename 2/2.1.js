// Write code to remove duplicates from an unsorted linked list.

(function(){
  var Node = (function(){
    // Constructor
    function Node(value) {
      this.value = value;
      this.next = null;
    }
    return Node;
  })();

  var LinkedList = (function(){
    // Constructor
    function LinkedList() {
      this.first = null;
      this.last = null;
    }

    LinkedList.prototype.insert = function(value) {
      var node = new Node(value);
      if(this.first === null) {
        this.first = this.last = node;
      } else {
        var tmp = this.last;
        this.last = node;
        node.prev = tmp;
        tmp.next = node;
      }
    }

    LinkedList.prototype.print = function() {
      var temp = this.first;
      console.log(temp)
      while(temp) {
        console.log(temp);
        temp = temp.next;
      }
    }

    return LinkedList;
  })();


var arr = [2, 3, 4, 5, 1, 8, 0];

var ll = new LinkedList();

for(var i = 0; i < arr.length; i++) {
  ll.insert(arr[i]);
}

console.log(ll)

})();
