//A Spoiler Element implemented via div + paragraph (named spoiler-div)
class SpoilerElem extends HTMLParagraphElement{
	onLoadCallback(){
		this.showInner = true;
		this.div = document.createElement("div");
		this.div.style.border = "1pt solid #888888"
		for (var child of this.children){
			this.div.appendChild(child);
		}
		while (this.firstChild)
			this.removeChild(this.firstChild);
	

		this.button = document.createElement("input");
		this.button.value = "Show";
		this.button.type = "button";

		this.button.onclick = () => this.setExpanded(!this.showInner);
		this.appendChild(this.button);
		this.appendChild(this.div);
		this.setExpanded(false);
	}
	
	constructor(){
		super();
    
		window.onload = () => this.onLoadCallback();
	}

	
	setExpanded(bool){
		if (this.showInner && !bool){
			for (var child of this.div.children){
				child.style.display = 'none';
			}
			this.button.value = "Show";
		} else if (!this.showInner && bool){						
			for (var child of this.div.children){
				child.style.display = 'inline';
			}
			this.button.value = "Hide";
		}
		this.showInner = bool;
	}
	
	

	
}
customElements.define("spoiler-div", SpoilerElem, {extends: 'p'});
