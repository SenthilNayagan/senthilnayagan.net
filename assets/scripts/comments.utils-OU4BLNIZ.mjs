import"./chunk-6KMKD42J.mjs";var a=document.querySelector("#comment-template"),l=async e=>{let t=await(await fetch(`/.netlify/functions/comments?id=${e}`)).json();if(t.error)throw new Error(t.error);return t.data},u=e=>{let t=a.content.cloneNode(!0),r=t.querySelector("img"),o=t.querySelector("a");r.src=`${e.user.avatarUrl}`,o.href=`https://github.com/${e.user.name}`,o.innerHTML=e.user.name;let n=t.querySelector(".post-comment-author");if(!e.user.isAuthor)n.remove();else{let m=`author-${e.user.name.replace(/\s/,"")}`;n.id=m,o.setAttribute("aria-describedby",m)}let c=t.querySelector("time");c.setAttribute("datetime",e.dateTime),c.innerHTML=e.dateRelative;let s=t.querySelector(".post-comment-edited");e.isEdited||s.remove();let i=t.querySelector(".post-comment-body");return i.innerHTML=e.body,t},d=async e=>{let t=document.querySelector("#comments"),r=t.querySelector("#comments-count"),o=t.querySelector("#comments-placeholder"),n=t.querySelector("ol");if(!e.length){o.innerHTML="No comments yet.";return}r.innerText=`${e.length} `,o.remove(),e.forEach(c=>{let s=u(c);n.appendChild(s)})};export{l as fetchComments,d as renderComments};
