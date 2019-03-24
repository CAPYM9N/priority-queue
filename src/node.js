class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {

		if(this.right){
			return;
		}
	
		if(this.left){	
				this.right=node;
		}
		else{
			this.left=node;
			
		}

	}

	removeChild(node) {

		if(this.left==node){
		this.left=null;
		//this.left.parent=null;
		}
		else if(this.right==node){
			this.right=null;
		//	this.right.parent=null;
		}
		else{
			throw new Error("is not a child");

		}
	}

	remove() {
		if(this.parent==null){
			return;
		}
	//	this.left.
	}

	swapWithParent() {
		if(this.parent==null){
			return;
		}
	}
}

module.exports = Node;
