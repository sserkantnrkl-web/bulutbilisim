const P=[["index.html","Giriş ve kazanımlar","#1a1478"],["bolum-1-1.html","1.1 Bulutu bir servis yapan nedir","#1a1478"],["bolum-1-2.html","1.2 Sorumluluk sınırı","#0077b6"],["bolum-1-3.html","1.3 Dağıtım modeli","#96600a"],["bolum-1-4.html","1.4 Sağlayıcı, hesap ve maliyet","#8a2362"],["bolum-1-5.html","1.5 Dönemin servisi","#0b6e5a"],["calisma.html","Çözümlü çalışmalar","#1a1478"],["lab.html","Laboratuvar, ödev, özet","#e30b17"]];
const cur=Math.max(0,P.findIndex(p=>location.pathname.endsWith(p[0])));
document.documentElement.style.setProperty("--c",P[cur][2]);
document.getElementById("nav").innerHTML="<b>Bulut Bilişim · Hafta 01</b>"+P.map((p,i)=>`<a href="${p[0]}" style="--k:${p[2]}"${i===cur?' aria-current="page"':""}>${p[1]}</a>`).join("");
const pg=document.getElementById("pager"),pr=P[cur-1],nx=P[cur+1];
pg.innerHTML=(pr?`<a href="${pr[0]}"><small>Önceki</small>${pr[1]}</a>`:"")+(nx?`<a class="next" href="${nx[0]}"><small>Sonraki</small>${nx[1]}</a>`:"");
const t=document.getElementById("model");
if(t){
const L=["Veri, kimlik, erişim","Uygulama","Çalışma zamanı","Konuk işletim sistemi","Sanallaştırma ve donanım"];
const M={"Kurum içi":[[1,1,1,1,1],"Binadan veriye her katman kurumda."],"IaaS":[[1,1,1,1,0],"Yalnız en alt katman sağlayıcıya geçti; işletim sistemi yaması hâlâ sizde."],"PaaS":[[1,1,0,0,0],"İşletim sistemi ve çalışma zamanı platforma geçti; uygulama sürümü sizde."],"FaaS":[[1,1,0,0,0],"Ayakta duran uygulama yok; kapasite de platformda. İşlev kodu ve olay sözleşmesi sizde.",{1:"İşlev kodu ve olay sözleşmesi",2:"Çalışma zamanı ve kapasite"}],"SaaS":[[1,0,0,0,0],"Uygulama da sağlayıcıda. Veri, hesaplar ve paylaşım ayarları hâlâ sizde. Bu satır hiçbir modelde el değiştirmez."]};
const b=document.getElementById("tabs"),d=document.getElementById("mdesc");
const show=k=>{const[o,x,l]=M[k];t.innerHTML="<tr><th>Katman</th><th>Kim yönetir</th></tr>"+L.map((n,i)=>`<tr><td>${(l&&l[i])||n}</td><td class="${o[i]?"m":"p"}">${o[i]?"Müşteri":"Sağlayıcı"}</td></tr>`).join("");d.textContent=k+": "+x;b.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",e.textContent===k))};
Object.keys(M).forEach(k=>{const e=document.createElement("button");e.textContent=k;e.onclick=()=>show(k);b.appendChild(e)});show("IaaS");}
