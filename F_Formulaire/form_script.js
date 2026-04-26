// SCROLL
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add("show");
});
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));


// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
document.querySelectorAll("input,button").forEach(el=>{
el.onmouseenter=()=>cursor.classList.add("active");
el.onmouseleave=()=>cursor.classList.remove("active");
});


// PARTICLES
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let p=[];
for(let i=0;i<80;i++){
p.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2,dx:Math.random()-0.5,dy:Math.random()-0.5});
}

function anim(){
ctx.clearRect(0,0,canvas.width,canvas.height);
p.forEach(e=>{
e.x+=e.dx;e.y+=e.dy;
ctx.beginPath();
ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
ctx.fillStyle="#7e22ce";
ctx.fill();
});
requestAnimationFrame(anim);
}
anim();


// 3D TILT
const card=document.querySelector("form");
card.onmousemove=e=>{
const r=card.getBoundingClientRect();
const x=e.clientX-r.left;
const y=e.clientY-r.top;

const rx=-(y-r.height/2)/20;
const ry=(x-r.width/2)/20;

card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,0.15),
rgba(255,255,255,0.05))`;
};
card.onmouseleave=()=>card.style.transform="rotateX(0) rotateY(0)";


// VALIDATION
document.getElementById("form").onsubmit=e=>{
e.preventDefault();
let ok=true;

document.querySelectorAll("input").forEach(i=>{
if(!i.value){
i.parentElement.classList.add("error");
ok=false;
}else{
i.parentElement.classList.remove("error");
}
});

if(ok){
alert("Envoyé 🚀");
e.target.reset();
}
};


// INPUT GLOW
document.querySelectorAll("input").forEach(i=>{
i.oninput=()=>i.style.boxShadow=i.value?"0 0 15px #00f5ff":"none";
});