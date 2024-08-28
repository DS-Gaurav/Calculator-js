let boxes=document.querySelectorAll("button");
// let inp=document.createElement("p");
// let out=document.createElement("p");
let out="";
let inp="";
let x="";
const outputin = document.getElementById("outputin");
const ans = document.getElementById("output");
console.log(boxes);
boxes.forEach((ele)=>{
	ele.addEventListener("click",()=>{
	outp(ele.innerText);
	});
});

const outp=(y)=>{
	if(y=="AC"){
			outputin.innerHTML="";
			ans.innerHTML="";
	}
	else if(y=="="){
		if(inp!="." || inp!="+" || inp!="-" || inp!="*" || inp!="÷" || inp!="%"){
			out=eval(x);
			ans.innerHTML=out;
		}
	}
	else if(y=="+" || y=="-" || y=="*" || y=="÷" || y=="%"){
		if(inp!="." && inp!=""&& (inp=="+" || inp=="-" || inp=="*" || inp=="÷" || inp=="%")){
			x=x.slice(0,-1);
			inp=y;
			x+=y;
			outputin.innerHTML=x;
		}
		else if(y!=inp && inp!="."){
			inp=y;
 			x+=y;
 			outputin.append(inp);
		}
	}
	else if(y=="Del"){
			x=x.slice(0, -1);
			inp=x.slice(-1);
			outputin.innerHTML=x;
	}
	else if(y=="."){
		if(inp!="." && inp!=""){
			inp=y;
			x+=y;
			outputin.append(inp);
		}
	}
	else{
		inp=y;
		x+=y;
		outputin.append(inp);
	}
}

// inp=ele.innerText;
// 		x+=ele.innerText;
// 		outputin.append(inp);
// if(y!=inp && inp!="."){
// 			inp=y;
// 			x+=y;
// 			outputin.append(inp);
// 		}