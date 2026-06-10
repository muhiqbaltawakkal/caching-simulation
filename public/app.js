const logs =
document.getElementById("logs");

function addLog(text){

const li =
document.createElement("li");

li.innerText =
new Date().toLocaleTimeString()
+
" - "
+
text;

logs.prepend(li);

}

function cacheMiss(){

document.getElementById(
"cacheStatus"
).innerHTML =
"🟢 ACTIVE";

document.getElementById(
"lastAction"
).innerHTML =
"🔴 CACHE MISS";

document.getElementById(
"responseTime"
).innerHTML =
"3000 ms";

document.getElementById(
"flow"
).innerHTML =
`
Client
<br>
↓
<br>
Cache (Kosong)
<br>
↓
<br>
Database
<br>
↓
<br>
Cache Dibuat
`;

document.getElementById(
"productData"
).innerHTML =
`
<b>Nama Produk:</b>
Laptop ASUS ROG
<br>

<b>Kategori:</b>
Gaming Laptop
<br>

<b>Harga:</b>
Rp 10.000.000
<br>

<b>Stok:</b>
25 Unit
<br><br>

<b>Sumber Data:</b>
DATABASE
<br>

<b>Status:</b>
CACHE MISS
`;

addLog(
"CACHE MISS - Data diambil dari DATABASE"
);

addLog(
"CACHE CREATED"
);

}

function cacheHit(){

document.getElementById(
"cacheStatus"
).innerHTML =
"🟢 ACTIVE";

document.getElementById(
"lastAction"
).innerHTML =
"🟢 CACHE HIT";

document.getElementById(
"responseTime"
).innerHTML =
"5 ms";

document.getElementById(
"flow"
).innerHTML =
`
Client
<br>
↓
<br>
Cache
<br>
↓
<br>
Data Langsung Ditemukan
`;

document.getElementById(
"productData"
).innerHTML =
`
<b>Nama Produk:</b>
Laptop ASUS ROG
<br>

<b>Kategori:</b>
Gaming Laptop
<br>

<b>Harga:</b>
Rp 10.000.000
<br>

<b>Stok:</b>
25 Unit
<br><br>

<b>Sumber Data:</b>
CACHE
<br>

<b>Status:</b>
CACHE HIT
`;

addLog(
"CACHE HIT - Data diambil dari CACHE"
);

}

function invalidateCache(){

document.getElementById(
"cacheStatus"
).innerHTML =
"🟡 INVALIDATED";

document.getElementById(
"lastAction"
).innerHTML =
"🟠 CACHE INVALIDATED";

document.getElementById(
"responseTime"
).innerHTML =
"-";

document.getElementById(
"flow"
).innerHTML =
`
Product Update
<br>
↓
<br>
Cache Dihapus
`;

addLog(
"CACHE INVALIDATED karena data berubah"
);

}

function evictCache(){

document.getElementById(
"cacheStatus"
).innerHTML =
"⚫ EVICTED";

document.getElementById(
"lastAction"
).innerHTML =
"⚫ CACHE EVICTED";

document.getElementById(
"responseTime"
).innerHTML =
"-";

document.getElementById(
"flow"
).innerHTML =
`
TTL Expired
<br>
↓
<br>
Cache Otomatis Dihapus
`;

addLog(
"CACHE EVICTED karena TTL habis"
);

}