(this["webpackJsonptinder-cards"]=this["webpackJsonptinder-cards"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(5),r=a.n(i),s=a(15),o=a(4),l=a(3),u=a(13),m=a(10),d=a(6),p=a(16),h=a(11),f=a(17),b=a(14),g=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.i,a=e.x,n=e.y,i=e.rot,r=e.scale,s=e.trans,o=e.bind,u=e.data[t],m=u.name,d=u.age,p=u.distance,h=u.text,f=u.pics;return c.a.createElement(l.a.div,{key:t,style:{transform:Object(l.b)([a,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))}},c.a.createElement(l.a.div,Object.assign({},o(t),{style:{transform:Object(l.b)([i,r],s)}}),c.a.createElement("div",{className:"card"},c.a.createElement(b.a,null,f.map((function(e,t){return c.a.createElement("img",{src:e,key:t,alt:"profilePicture"})}))),c.a.createElement("h2",null,m),c.a.createElement("h2",null,d),c.a.createElement("h5",null,p),c.a.createElement("h5",null,h))))}}]),t}(c.a.Component),w=[{pics:["https://cdn.britannica.com/89/149189-050-68D7613E/Bengal-tiger.jpg"],name:"Heather",age:32,distance:"4 miles away",text:"My nickname is Gilette because I'm the best a man can get. Also I will cut you."},{pics:["https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000554673258.jpg?w=620"],name:"Chloe",age:18,distance:"1 mile away",text:"The C and the L are silent."},{pics:["https://i.guim.co.uk/img/media/11d4c182d094199e26ddb36febe67123a9bbc93a/34_246_2966_4275/master/2966.jpg?width=700&quality=85&auto=format&fit=max&s=e78fc63cf43a4a9830619c324b5c854b"],name:"Helen",age:19,distance:"3 miles away",text:"Aspiring MILF"},{pics:["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-lion-king-mufasa-simba-1554901700.jpg?crop=0.535xw:1.00xh;0.121xw,0&resize=480:*"],name:"Savannah",age:29,distance:"3 miles away",text:"A little known fact is that I cover about 40% of Africa."},{pics:["https://images.unsplash.com/photo-1559202829-0fcd233c86c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80","https://vignette.wikia.nocookie.net/animals-are-cool/images/5/55/A_white_irish_goat.jpg/revision/latest?cb=20180323205350"],name:"2\u0645\u0627\u0639\u0632"}],y=(a(33),function(e){return{x:0,y:-10*e,scale:1,rot:20*Math.random()-10,delay:100*e}}),j=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};var x=function(){var e=Object(n.useState)((function(){return new Set})),t=Object(o.a)(e,1)[0],a=Object(l.c)(w.length,(function(e){return Object(s.a)({},y(e),{from:{rot:0,scale:1.5,y:-1e3}})})),i=Object(o.a)(a,2),r=i[0],m=i[1],d=Object(u.a)((function(e){var a=Object(o.a)(e.args,1)[0],n=e.down,c=Object(o.a)(e.delta,1)[0],i=(e.distance,Object(o.a)(e.direction,1)[0]),r=e.velocity,s=i<0?-1:1;!n&&r>.2&&t.add(a),m((function(e){if(a===e){var i=t.has(a);return{x:i?(200+window.innerWidth)*s:n?c:0,rot:c/100+(i?10*s*r:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:i?200:500}}}})),n||t.size!==w.length||setTimeout((function(){return t.clear()||m((function(e){return y(e)}))}),600)}));return r.map((function(e,t){var a=e.x,n=e.y,i=e.rot,r=e.scale;return c.a.createElement(g,{i:t,x:a,y:n,rot:i,scale:r,trans:j,data:w,bind:d})}))},v=function(){return c.a.createElement(x,null)};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4f0c4706.chunk.js.map