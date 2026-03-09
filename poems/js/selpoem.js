const config = {

    theTho: [
        "LỤC BÁT",
        "THẤT NGÔN",
        "TỰ DO",
        "NGŨ NGÔN",
        "SONG THẤT LỤC BÁT",
        "KHÁC"
    ],

    theLoai: [
        "QUÊ HƯƠNG",
        "TÌNH YÊU",
        "GIA ĐÌNH",
        "CUỘC SỐNG",
        "BUỒN",
        "KHÁC"
    ]

};

document.addEventListener("DOMContentLoaded", async function(){

const theThoSelect = document.getElementById("theTho");
const theLoaiSelect = document.getElementById("theLoai");
const amThanhSelect = document.getElementById("amThanh");

/* ===== OPTION TẤT CẢ ===== */

const optionAll1 = document.createElement("option");
optionAll1.value = "";
optionAll1.textContent = "TẤT CẢ";
theThoSelect.appendChild(optionAll1);

const optionAll2 = document.createElement("option");
optionAll2.value = "";
optionAll2.textContent = "TẤT CẢ";
theLoaiSelect.appendChild(optionAll2);

/* ===== ÂM THANH ===== */

const audioOptions = [
{value:"",text:"TẤT CẢ"},
{value:"co",text:"CÓ ÂM THANH"},
{value:"khong",text:"KHÔNG CÓ ÂM THANH"}
];

audioOptions.forEach(item=>{
const option=document.createElement("option");
option.value=item.value;
option.textContent=item.text;
amThanhSelect.appendChild(option);
});

/* ===== THỂ THƠ ===== */

config.theTho.forEach(item=>{
const option=document.createElement("option");
option.value=item;
option.textContent=item;
theThoSelect.appendChild(option);
});

/* ===== THỂ LOẠI ===== */

config.theLoai.forEach(item=>{
const option=document.createElement("option");
option.value=item;
option.textContent=item;
theLoaiSelect.appendChild(option);
});

/* ===== KIỂM TRA AUDIO ===== */

async function checkAudio(poem){

try{

const res=await fetch(poem.audioFile,{method:"HEAD"});

poem.audio = res.ok ? "co" : "khong";

}catch(e){

poem.audio="khong";

}

}

/* ===== LOAD AUDIO STATUS ===== */

async function loadAudioStatus(){

if(typeof poems==="undefined") return;

const tasks = poems.map(p=>checkAudio(p));

await Promise.all(tasks);

}

/* ===== INIT ===== */

await loadAudioStatus();

});