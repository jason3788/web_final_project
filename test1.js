const dropdownItems = document.querySelectorAll('.dropdown1');
dropdownItems.forEach((item) => {
  const dropdownMenu = item.querySelector('.dropdown-menu');
  item.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });
  item.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
  });
});


function toggleHeader() {
  var header = document.getElementsByTagName('header')[0];
  header.classList.toggle('hidden');
  
  var button = document.getElementById('toggleButton');
  var buttonImage = button.getElementsByTagName('img')[0];
  
  if (header.classList.contains('hidden')) {
    buttonImage.src = 'down-arrow.jpg'
  } 
  else {
    buttonImage.src = 'up-arrow.jpg';
  }
}


function redirectToMyWebsite() {
  window.location.href = "test2.html";
}





var groups = [
  [
    { image: 'allchamp.jpg', text: '角色介紹' },
    { image: 'topchamp.jpg', text: '上路:上路在遊戲中的術語為TOP，線路在地圖的上半部，以單人線為主。主要出現的英雄類型為鬥士、坦克，也因為地圖的上半部比較孤立無援的關係，選擇上路的玩家意識要夠清楚，對兵線、視野的掌握也要熟悉' },
    { image: 'jgchamp.jpg', text: '打野:打野在遊戲中的術語為JG（名詞jungle的縮寫），主要任務為在地圖中遊走，小心避開敵方視野，給予其他路支援，選擇JG的英雄角色從坦克、刺客、鬥士都有，英雄的技能是攸關打野速度的關鍵。' },
    { image: 'midchamp.jpg', text: '中路:中路在遊戲中的術語為MID，主要選擇的英雄為刺客、法師輸出居多。由於地圖路線距離較短的關係，小兵到線上的速度比其他路快，中路可以比較靈活地去上、下路支援。相對來說也會比較容易遭受到各路的Gank。' },
    { image: 'adchamp.jpg', text: '射手:AD（Attack Damage Carry）：AD 位置通常是遊戲中的主要傷害輸出角色。AD的目標是在遊戲的後期階段快速積累金錢和經驗，並成為團隊中傷害最高的成員。' },
    { image: 'supchamp.jpg', text: '輔助:SUP位置是負責提供團隊支援的角色。SUP 的目標是協助 ADC 或其他隊友在遊戲中取得優勢並保護他們的生存。SUP 位置的玩家通常會選擇擁有治療、護盾、控場技能等能力的英雄，以提供額外的生存能力和戰鬥優勢給團隊。' }
  ],
  [
    { image: 'lol-map.jpg', text: '召喚師峽谷是《英雄聯盟》中最經典和主要的地圖。它是一個對稱的5對5對戰地圖，由三條主要巷道（上路、中路和下路）和連接這些巷道的叢林組成' },
    { image: 'lol-map2.jpg', text: '咆嘯深淵是《英雄聯盟》中的單線對戰地圖，也稱為ARAM（All Random All Mid）。在咆嘯深淵中，兩支隊伍由隨機選擇的英雄組成，並在單一的中央巷道上對抗。' }
  ],
  [
    { image: 'item.jpg', text: '裝備介紹' },
    { image: 'item1.jpg', text: '狂風之力:朝目標方向衝刺，對目的地附近生命最低的敵人發射三發飛彈。造成物理傷害，對低生命目標的傷害提升。'},
    { image: 'item2.jpg', text: '盧登驟雨:傷害性技能對目標及 3 名附近敵人造成傷害，並獲得跑速。對英雄造成技能傷害會減少此道具的冷卻時間。' },
    { image: 'item3.jpg', text: '飲血戰錘:對敵人造成傷害。根據擊中每個英雄回復生命。' },
    { image: 'item4.jpg', text: '千變賈克修:與英雄交戰的每秒獲得一層堆層，每層提供物理防禦與魔法防禦。滿層時造成魔法傷害吸取周遭敵人的生命來回復自己。' }
  ]
];

var groups2 = [
  [
    { image: 'apexchamp.jpg', text: 'Apex角色介紹' },
    { image: 'apexchamp1.jpg', text: '惡靈是一名如旋風般的戰士，她能夠遞出致命的攻擊並透過撕開現實裂縫來操控時空－－但這些力量卻有個代價。' },
    { image: 'apexchamp1q.jpg', text:'惡靈戰術技能'},
    { image: 'apexchamp1r.jpg', text:'惡靈絕招'},
    { image: 'apexchamp2.jpg', text: '「瓦爾基里」是身為著名泰坦鐵馭「毒蛇」的女兒，她繼承了父親對飛行的熱愛，但並沒有繼承到他的責任感' },
    { image: 'apexchamp2q.jpg', text:'瓦爾基里戰術技能'},
    { image: 'apexchamp2r.jpg', text:'瓦爾基里絕招'},
    { image: 'apexchamp3.jpg', text: '艾許是冰冷的化身、完美主義者和渴望權力的里德博士。 但在自信的外表背後，是更邪惡的存在。' },
    { image: 'apexchamp3q.jpg', text:'艾許戰術技能'},
    { image: 'apexchamp3r.jpg', text:'艾許絕招'}
  ],
  [
    { image: 'weapon1.jpg', text: '所有維度都較為均衡的突擊步槍。十分適合新手使用,性能平均且控制力極其優越。' },
    { image: 'weapon2.jpg', text: '傷害較高,後座力也較大的突擊步槍。擁有頗佳的傷害,雖在控制性方面稍遜R-301,但整體而言不錯的一把槍。' },
    { image: 'weapon3.jpg', text: '小幫手（輔助手槍）是一把用重型子彈的手槍，在Apex社區中經常看到高手集錦和主播都在使用的一把武器。' }
  ],
  [
    { image: 'apexmap1.jpg', text: '奧林匹斯' },
    { image: 'apexmap2.jpg', text: '世界邊緣' },
    { image: 'apexmap3.jpg', text: '風暴點' }
  ]
];

var groups3 = [
  [
    { image: 'kdhighlight.gif', text: 'Kevin Durant 精彩回放' },
    { image: 'kdhighlight1.gif', text: '精彩回放1' },
    { image: 'kdhighlight2.gif', text: '精彩回放2' },
  ],
  [
    { image: 'kdshoe.jpg', text: 'KD15 準備隨你長征， 比他先前的專屬簽名鞋更輕盈，能在關鍵時刻保持彈力十足的舒適感。 流暢的騁馳體驗，如 KD 的跳投' },
    { image: 'kdjersy.jpg', text: 'Kevin Durant 現在所穿的球衣，使用35號作為他的背號' },
    { image: 'kdball.jpg', text: 'Nike All Court 8p K Durant [DV4205-113]灰白' }
  ],
];

var groups4 = [
  [
    { image: 'curryhighlight.gif', text: 'Stephen Curry 精彩回放' },
    { image: 'curryhighlight1.gif', text: '精彩回放1' },
    { image: 'curryhighlight2.gif', text: '精彩回放2' },
  ],
  [
    { image: 'curryshoe.jpg', text: 'Unisex Curry 2 Low FloTro Basketball Shoes' },
    { image: 'curryjersy.jpg', text: 'Stephen Curry 現在所穿的球衣，使用30號作為他的背號' },
    { image: 'curryball.jpg', text: 'Under Armour Stephen Curry ' }
  ],
];

var currentGroupIndex = 0;
var currentIndex = 0;
var imageElement = document.querySelector('.image');
var textElement = document.querySelector('.text');
var dropdownElement = document.querySelector('.dropdown2');
var isPaused = false;
var pauseButton = document.querySelector('.pause-button');

var currentGroupIndex2 = 0;
var currentIndex2 = 0;
var imageElement2 = document.querySelector('.image2');
var textElement2 = document.querySelector('.text2');
var dropdownElement2 = document.querySelector('.dropdown2-2');
var isPaused2 = false;
var pauseButton2 = document.querySelector('.pause-button2');

var currentGroupIndex3 = 0;
var currentIndex3 = 0;
var imageElement3 = document.querySelector('.image3');
var textElement3 = document.querySelector('.text3');
var dropdownElement3 = document.querySelector('.dropdown2-3');
var isPaused3 = false;
var pauseButton3 = document.querySelector('.pause-button3');

var currentGroupIndex4 = 0;
var currentIndex4 = 0;
var imageElement4 = document.querySelector('.image4');
var textElement4 = document.querySelector('.text4');
var dropdownElement4 = document.querySelector('.dropdown2-4');
var isPaused4 = false;
var pauseButton4 = document.querySelector('.pause-button4');

function nextContent() {
  currentIndex = (currentIndex + 1) % groups[currentGroupIndex].length;
  updateContent();
}

function nextContent2() {
  currentIndex2 = (currentIndex2 + 1) % groups2[currentGroupIndex2].length;
  updateContent2();
}

function nextContent3() {
  currentIndex3 = (currentIndex3 + 1) % groups3[currentGroupIndex3].length;
  updateContent3();
}

function nextContent4() {
  currentIndex4 = (currentIndex4 + 1) % groups4[currentGroupIndex4].length;
  updateContent4();
}


function previousContent() {
  currentIndex = (currentIndex - 1 + groups[currentGroupIndex].length) % groups[currentGroupIndex].length;
  updateContent();
}

function previousContent2() {
  currentIndex2 = (currentIndex2 - 1 + groups2[currentGroupIndex2].length) % groups2[currentGroupIndex2].length;
  updateContent2();
}

function previousContent3() {
  currentIndex3 = (currentIndex3 - 1 + groups3[currentGroupIndex3].length) % groups3[currentGroupIndex3].length;
  updateContent3();
}

function previousContent4() {
  currentIndex4 = (currentIndex4 - 1 + groups4[currentGroupIndex4].length) % groups4[currentGroupIndex4].length;
  updateContent4();
}

function selectGroup(value) {
  currentGroupIndex = parseInt(value);
  currentIndex = 0;
  updateContent();
}

function selectGroup2(value) {
  currentGroupIndex2 = parseInt(value);
  currentIndex2 = 0;
  updateContent2();
}

function selectGroup3(value) {
  currentGroupIndex3 = parseInt(value);
  currentIndex3 = 0;
  updateContent3();
}

function selectGroup4(value) {
  currentGroupIndex4 = parseInt(value);
  currentIndex4 = 0;
  updateContent4();
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    pauseButton.textContent = '開始';
    pauseButton.style.backgroundColor = 'green';
  } else {
    pauseButton.textContent = '暫停';
    pauseButton.style.backgroundColor = 'red';
  }
}

function togglePause2() {
  isPaused2 = !isPaused2;

  if (isPaused2) {
    pauseButton2.textContent = '開始';
    pauseButton2.style.backgroundColor = 'green';
  } else {
    pauseButton2.textContent = '暫停';
    pauseButton2.style.backgroundColor = 'red';
  }
}

function togglePause3() {
  isPaused3 = !isPaused3;

  if (isPaused3) {
    pauseButton3.textContent = '開始';
    pauseButton3.style.backgroundColor = 'green';
  } else {
    pauseButton3.textContent = '暫停';
    pauseButton3.style.backgroundColor = 'red';
  }
}

function togglePause4() {
  isPaused4 = !isPaused4;

  if (isPaused4) {
    pauseButton4.textContent = '開始';
    pauseButton4.style.backgroundColor = 'green';
  } else {
    pauseButton4.textContent = '暫停';
    pauseButton4.style.backgroundColor = 'red';
  }
}

function updateContent() {
  var currentGroup = groups[currentGroupIndex];
  var currentContent = currentGroup[currentIndex];

  var imageElement = document.querySelector('.image');
  var textElement = document.querySelector('.intro-text');

  imageElement.src = currentContent.image;
  textElement.textContent = currentContent.text;

  imageElement.classList.add('hidden2');
  textElement.classList.add('hidden2');

  setTimeout(function() {
    imageElement.classList.remove('hidden2');
    textElement.classList.remove('hidden2');
  }, 100);

  dropdownElement.value = currentGroupIndex.toString();
}

function updateContent2() {
  var currentGroup2 = groups2[currentGroupIndex2];
  var currentContent2 = currentGroup2[currentIndex2];

  var imageElement2 = document.querySelector('.image2');
  var textElement2 = document.querySelector('.intro-text2');

  imageElement2.src = currentContent2.image;
  textElement2.textContent = currentContent2.text;

  imageElement2.classList.add('hidden2');
  textElement2.classList.add('hidden2');

  setTimeout(function() {
    imageElement2.classList.remove('hidden2');
    textElement2.classList.remove('hidden2');
  }, 100);

  dropdownElement2.value = currentGroupIndex2.toString();
}

function updateContent3() {
  var currentGroup3 = groups3[currentGroupIndex3];
  var currentContent3 = currentGroup3[currentIndex3];

  var imageElement3 = document.querySelector('.image3');
  var textElement3 = document.querySelector('.intro-text3');

  imageElement3.src = currentContent3.image;
  textElement3.textContent = currentContent3.text;

  imageElement3.classList.add('hidden2');
  textElement3.classList.add('hidden2');

  setTimeout(function() {
    imageElement3.classList.remove('hidden2');
    textElement3.classList.remove('hidden2');
  }, 100);

  dropdownElement3.value = currentGroupIndex3.toString();
}

function updateContent4() {
  var currentGroup4 = groups4[currentGroupIndex4];
  var currentContent4 = currentGroup4[currentIndex4];

  var imageElement4 = document.querySelector('.image4');
  var textElement4 = document.querySelector('.intro-text4');

  imageElement4.src = currentContent4.image;
  textElement4.textContent = currentContent4.text;

  imageElement4.classList.add('hidden2');
  textElement4.classList.add('hidden2');

  setTimeout(function() {
    imageElement4.classList.remove('hidden2');
    textElement4.classList.remove('hidden2');
  }, 100);

  dropdownElement4.value = currentGroupIndex4.toString();
}


setInterval(function() {
  if (!isPaused) {
    nextContent();
  }
  if (!isPaused2) {
    nextContent2();
  }
  if (!isPaused3) {
    nextContent3();
  }
  if (!isPaused4) {
    nextContent4();
  }
}, 5000);


updateContent();
updateContent2();
updateContent3();
updateContent4();


function smoothScroll(event, targetId) {
  event.preventDefault(); 

  const targetElement = document.querySelector("#" + targetId); 
  const targetPosition = targetElement.getBoundingClientRect().top; 

  window.scrollTo({
    top: window.pageYOffset + targetPosition, 
    behavior: "smooth" 
  });
}



var selectedCell;
var popup = document.getElementsByClassName("popup")[0];
var table = document.getElementsByClassName("personal")[0];

window.addEventListener("load", function() {
  calculateTotal();
});

function showPopup(cell) {
  selectedCell = cell;
    var dayIndex = selectedCell.cellIndex;
    var rowIndex = selectedCell.parentNode.rowIndex - 1;
    var day = getDayName(dayIndex); 
    var lessonIndex = rowIndex + 1;
    document.getElementById("current-day").innerText = day;
    document.getElementById("current-lesson").innerText = lessonIndex;
    popup.style.display = "block";
}

function getDayName(index) {
  var days = ["","一", "二", "三", "四", "五"];
  return days[index];
}

function hidePopup() {
    popup.style.display = "none";
}

function confirmAction() {
    var action = document.querySelector('input[name="action"]:checked').value;
    var courseInput = document.getElementById("course-input");
    var course = courseInput.value;

    if (action === "change") {
        selectedCell.innerText = course;
    } 
    else if (action === "delete") {
        selectedCell.innerText = "";
    }

    calculateTotal();

    hidePopup();
}

function cancelAction() {
    hidePopup();
}

function clearTable() {
  var personalTable = document.querySelector('.personal');
  var cells = personalTable.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }     
  calculateTotal();  
  hidePopup();
}

function calculateTotal() {
    var totalCell = document.getElementById("total-1");
    var table = document.getElementsByTagName("table")[0];
    var count = 0;

    var cells = table.getElementsByTagName("td");
    for (var i = 0; i < cells.length-1; i++) {
        if (cells[i].innerText !== "") {
            count++;
        }
    }

    totalCell.innerText = count;
}


var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
    showPopup(this);
    });
}

var showMoreBtn = document.getElementById("show-more-btn");
var moreInfo = document.getElementById("more-info");

showMoreBtn.addEventListener("click", function() {
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    showMoreBtn.textContent = "隱藏詳情";
  } else {
    moreInfo.style.display = "none";
    showMoreBtn.textContent = "顯示更多";
  }
});
