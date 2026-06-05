let activeTabKey = 'monday';

const exerciseImages = {
    "Barbell Bench Press": "img/Barbell Bench Press.jpg",
    "Lat Pulldown": "img/Lat Pulldown.jpg",
    "Incline Dumbbell Bench Press": "img/Incline Dumbbell Bench Press.jpg",
    "Barbell Bent Over Row": "img/Barbell Bent Over Row.jpg",
    "Machine Overhead Press": "img/Machine Overhead Press.jpg",
    "Dumbbell Lateral Raise": "img/Dumbbell Lateral Raise.jpg",
    "Barbell Curl": "img/Barbell Curl.jpg",
    "Cable Triceps Pushdown": "img/Cable Triceps Pushdown.jpg",

    "Barbell Back Squat": "img/Barbell Back Squat.jpg",
    "Romanian Deadlift (RDL)": "img/Romanian Deadlift (RDL).jpg",
    "Leg Press": "img/Leg Press.jpg",
    "Seated Leg Curl": "img/Seated Leg Curl.jpg",
    "Standing Calf Raise": "img/Standing Calf Raise.jpg",

    "Dumbbell Fly": "img/Dumbbell Fly.jpg",
    "Dumbbell Overhead Press": "img/Dumbbell Overhead Press.jpg",
    "Cable Rope Triceps Pushdown": "img/Cable Rope Triceps Pushdown.jpg",
    "Single Arm Cable Triceps Pushdown": "img/Single Arm Cable Triceps Pushdown.jpg",
    "Crossbody Cable Triceps Ext": "img/Crossbody Cable Triceps Ext.jpg",
    "Light Pec Deck Fly": "img/Light Pec Deck Fly.jpg",

    "Wide Grip Lat Pulldown": "img/Wide Grip Lat Pulldown.jpg",
    "Machine Plate Loaded Row": "img/Machine Plate Loaded Row.jpg",
    "Cable Pullover": "img/Cable Pullover.jpg",
    "Face Pull": "img/Face Pull.jpg",
    "Incline Dumbbell Curl": "img/Incline Dumbbell Curl.jpg",
    "Dumbbell Hammer Curl": "img/Dumbbell Hammer Curl.jpg",
    "Dumbbell Shrug": "img/Dumbbell Shrug.jpg",
    "Single Arm Cable Curl": "img/Single Arm Cable Curl.jpg",

    "Hack Squat": "img/Hack Squat.jpg",
    "Leg Extension": "img/Leg Extension.jpg",
    "Dumbbell Romanian Deadlift": "img/Dumbbell Romanian Deadlift.jpg",
    "Bulgarian Split Squat": "img/Bulgarian Split Squat.jpg",
    "Seated Calf Raise": "img/Seated Calf Raise.jpg",
    "Seated Hip Adductor Machine": "img/Seated Hip Adductor Machine.jpg",

    "Alternating Dumbbell Curl": "img/Alternating Dumbbell Curl.jpg",
    "Dumbbell Triceps Kickback": "img/Dumbbell Triceps Kickback.jpg",
    "One Arm Dumbbell Row": "img/One Arm Dumbbell Row.jpg",
    "Dumbbell Reverse Fly": "img/Dumbbell Reverse Fly.jpg",
};

const defaultTreinos = {
    monday: [
        "Barbell Bench Press — 4x5–8",
        "Lat Pulldown — 4x6–8",
        "Incline Dumbbell Bench Press — 3x8–10",
        "Barbell Bent Over Row — 3x6–10",
        "Machine Overhead Press — 3x6–10",
        "Dumbbell Lateral Raise — 3x15–20",
        "Barbell Curl — 3x8–12",
        "Cable Triceps Pushdown — 3x8–12",
        "CORE: Lying Leg Raise — 3x15",
        "CORE: Abdominal Crunch — 3x12–15",
        "CORE: Plank — 3x30 sec",
        "Cardio: 15–20 min Zone 2"
    ],
    tuesday: [
        "Barbell Back Squat — 4x5–8",
        "Romanian Deadlift (RDL) — 4x6–8",
        "Leg Press — 3x10–12",
        "Seated Leg Curl — 3x10–12",
        "Standing Calf Raise — 5x10–15",
        "Cardio: 20 min Zone 2"
    ],
    wednesday: [
        "Incline Dumbbell Bench Press — 4x8–12",
        "Dumbbell Fly — 3x12–15",
        "Dumbbell Overhead Press — 3x8–12",
        "Dumbbell Lateral Raise — 5x12–20",
        "Cable Rope Triceps Pushdown — 3x10–15",
        "Crossbody Cable Triceps Ext — 3x12–15",
        "Light Pec Deck Fly — 3x15",
        "CORE: Lying Leg Raise — 3x15",
        "CORE: Abdominal Crunch — 3x12–15",
        "CORE: Plank — 3x30 sec",
        "Cardio: 20–25 min Zone 2"
    ],
    thursday: [
        "Wide Grip Lat Pulldown — 3x8–12",
        "Machine Plate Loaded Row — 4x8–12",
        "Cable Pullover — 3x12–15",
        "Face Pull — 4x12–20",
        "Incline Dumbbell Curl — 3x10–12",
        "Dumbbell Hammer Curl — 3x10–12",
        "Dumbbell Shrug — 3x10–15",
        "Single Arm Cable Curl — 3x12–15",
        "Cardio: 15–20 min light"
    ],
    friday: [
        "Hack Squat — 4x8–12",
        "Leg Extension — 3x12–15",
        "Seated Leg Curl — 4x10–15",
        "Dumbbell Romanian Deadlift — 3x10–12",
        "Bulgarian Split Squat — 3x10–12",
        "Seated Calf Raise — 5x12–20",
        "Seated Hip Adductor Machine — 3x15–20",
        "Cardio: 25–30 min Zone 2"
    ],
    saturday: [
        "Dumbbell Lateral Raise — 6x15–20",
        "Alternating Dumbbell Curl — 4x10–15",
        "Dumbbell Triceps Kickback — 4x10–15",
        "One Arm Dumbbell Row — 4x Close to failure",
        "Dumbbell Reverse Fly — 3x15–20",
        "CORE: Lying Leg Raise — 3x15",
        "CORE: Abdominal Crunch — 3x12–15",
        "CORE: Plank — 3x30 sec",
        "Cardio: 40–60 min Zone 2"
    ]
};

// Atualizando para versão 3 (v3) para aplicar os novos nomes automaticamente
// Mas copiando os dados antigos (v2) para que você não perca os kg salvos nem os checks.
let weightsState = JSON.parse(localStorage.getItem('weightsState_v3'));
if (!weightsState) {
    weightsState = JSON.parse(localStorage.getItem('weightsState_v2')) || {};
    localStorage.setItem('weightsState_v3', JSON.stringify(weightsState));
}

let checkedState = JSON.parse(localStorage.getItem('checkedState_v3'));
if (!checkedState) {
    checkedState = JSON.parse(localStorage.getItem('checkedState_v2')) || {};
    localStorage.setItem('checkedState_v3', JSON.stringify(checkedState));
}

let treinos = JSON.parse(localStorage.getItem('userTreinos_v3'));
if (!treinos) {
    treinos = defaultTreinos; // Força a atualização para aplicar Seated Leg Curl e remover o ponto
    localStorage.setItem('userTreinos_v3', JSON.stringify(treinos));
}

const daysMap = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };

function validateCheckboxes() {
    const now = new Date();
    let modified = false;
    
    for (let key in checkedState) {
        const savedDate = new Date(checkedState[key].date);
        const diffTime = now.getTime() - savedDate.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        const isSameDayOfWeek = now.getDay() === daysMap[key];
        const isDifferentDate = now.toDateString() !== savedDate.toDateString();
        
        if (diffDays >= 6 || (isSameDayOfWeek && isDifferentDate)) {
            checkedState[key].indices = [];
            checkedState[key].date = now.toDateString();
            modified = true;
        }
    }
    
    if (modified) {
        localStorage.setItem('checkedState_v3', JSON.stringify(checkedState));
    }
}

function updateDayBadge() {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const now = new Date();
    const dayIndex = now.getDay();
    const dayName = days[dayIndex];
    const badge = document.getElementById('day-badge');

    if (dayIndex === 0) {
        badge.innerText = `${dayName}: REST DAY`;
        badge.style.color = "#888";
        badge.style.borderColor = "rgba(136, 136, 136, 0.2)";
    } else {
        badge.innerText = `${dayName}: WORKOUT`;
        badge.style.color = "#ccff00";
        badge.style.borderColor = "rgba(204, 255, 0, 0.2)";
    }
}

function autoSelectCurrentDay() {
    const currentDayIndex = new Date().getDay();
    let targetDay = Object.keys(daysMap).find(key => daysMap[key] === currentDayIndex);

    if (targetDay === 'sunday') {
        targetDay = 'monday';
    }

    const targetBtn = document.getElementById(`btn-${targetDay}`);
    if (targetBtn) {
        targetBtn.click();
    }
}

let timer;
let timeLeft;
let isRunning = false;
let originalTime;

const display = document.getElementById('display');
const secondsInput = document.getElementById('secondsInput');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const setTimerBtn = document.getElementById('setTimer');
const alertSound = document.getElementById('alertSound');

window.onload = () => {
    validateCheckboxes();
    const savedTime = localStorage.getItem('lastTime') || 40;
    timeLeft = parseInt(savedTime);
    originalTime = timeLeft;
    updateDisplay();
    renderLists();
    updateDayBadge();
    document.getElementById('gymNotes').value = localStorage.getItem('gymNotes') || '';
    autoSelectCurrentDay();
    updateProgress();
};

function updateDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

setTimerBtn.onclick = () => {
    if (secondsInput.value > 0) {
        timeLeft = parseInt(secondsInput.value);
        originalTime = timeLeft;
        localStorage.setItem('lastTime', timeLeft);
        updateDisplay();
        secondsInput.value = '';
    }
};

startBtn.onclick = () => {
    if (isRunning) return;
    alertSound.pause(); 
    alertSound.currentTime = 0;
    isRunning = true;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alertSound.play(); 
        }
    }, 1000);
};

pauseBtn.onclick = () => {
    clearInterval(timer);
    isRunning = false;
    alertSound.pause();
};

resetBtn.onclick = () => {
    clearInterval(timer);
    isRunning = false;
    alertSound.pause();
    alertSound.currentTime = 0;
    timeLeft = originalTime;
    updateDisplay();
};

function openTab(evt, tabName) {
    activeTabKey = tabName;
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
        contents[i].classList.remove("fluid-enter");
    }

    const btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) btns[i].classList.remove("active");

    const targetContent = document.getElementById(tabName);
    targetContent.classList.add("active");
    
    void targetContent.offsetWidth;
    targetContent.classList.add("fluid-enter");
    
    evt.currentTarget.classList.add("active");
    updateProgress();
}

function renderLists() {
    renderSingleList('monday', 'listMon');
    renderSingleList('tuesday', 'listTue');
    renderSingleList('wednesday', 'listWed');
    renderSingleList('thursday', 'listThu');
    renderSingleList('friday', 'listFri');
    renderSingleList('saturday', 'listSat');
}

function renderSingleList(key, listId) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = '';
    
    const savedIndices = (checkedState[key] && checkedState[key].indices) ? checkedState[key].indices : [];

    (treinos[key] || []).forEach((item, index) => {
        const isChecked = savedIndices.includes(index);
        const savedWeight = weightsState[`${key}-${index}`] || '';
        
        const li = document.createElement('li');
        li.className = `workout-item ${isChecked ? 'checked' : ''}`;
        li.style.order = isChecked ? 1000 + index : index;
        
        li.innerHTML = `
            <div class="workout-info">
                <input type="checkbox" onchange="moveItem(this, ${index}, '${key}')" ${isChecked ? 'checked' : ''}>
                <span>${item}</span>
            </div>
            <input type="text" class="weight-input" placeholder="kg" value="${savedWeight}" oninput="saveWeight('${key}', ${index}, this.value)" onclick="event.stopPropagation()">
            <button class="img-btn" onclick="openImage('${item.replace(/'/g, "\\'")}')">💪</button>
        `;
        listElement.appendChild(li);
    });
}

function saveWeight(day, index, value) {
    weightsState[`${day}-${index}`] = value;
    localStorage.setItem('weightsState_v3', JSON.stringify(weightsState));
}

function moveItem(checkbox, originalIndex, dayKey) {
    const li = checkbox.parentElement.parentElement;
    
    if (!checkedState[dayKey]) {
        checkedState[dayKey] = { date: new Date().toDateString(), indices: [] };
    }
    checkedState[dayKey].date = new Date().toDateString();

    if (checkbox.checked) {
        li.classList.add('checked');
        li.style.order = 1000 + originalIndex;
        li.style.transform = "translateY(5px)";
        if (!checkedState[dayKey].indices.includes(originalIndex)) {
            checkedState[dayKey].indices.push(originalIndex);
        }
    } else {
        li.classList.remove('checked');
        li.style.order = originalIndex;
        li.style.transform = "translateY(-5px)";
        checkedState[dayKey].indices = checkedState[dayKey].indices.filter(i => i !== originalIndex);
    }
    
    localStorage.setItem('checkedState_v3', JSON.stringify(checkedState));

    setTimeout(() => li.style.transform = "translateY(0)", 200);
    updateProgress();
}

function updateProgress() {
    const currentTab = document.getElementById(activeTabKey);
    if (!currentTab) return;
    
    const checkboxes = currentTab.querySelectorAll('.workout-item input[type="checkbox"]');
    const checkedBoxes = currentTab.querySelectorAll('.workout-item input[type="checkbox"]:checked');
    
    const percent = checkboxes.length ? Math.round((checkedBoxes.length / checkboxes.length) * 100) : 0;
    
    document.getElementById('vertical-progress-bar').style.height = `${percent}%`;
    document.getElementById('vertical-progress-text').innerText = `${percent}%`;
}

document.getElementById('gymNotes').addEventListener('input', function() {
    localStorage.setItem('gymNotes', this.value);
});

function openNote() {
    const modal = document.getElementById('noteModal');
    modal.style.display = 'flex';
    modal.classList.add('active-modal');
}

function closeNote() {
    const modal = document.getElementById('noteModal');
    modal.classList.remove('active-modal');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function openEdit() {
    const select = document.getElementById('editDaySelect');
    select.value = activeTabKey;
    loadWorkoutForEdit();
    
    const modal = document.getElementById('editModal');
    modal.style.display = 'flex';
    modal.classList.add('active-modal');
}

function closeEdit() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('active-modal');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function loadWorkoutForEdit() {
    const day = document.getElementById('editDaySelect').value;
    document.getElementById('editWorkoutText').value = (treinos[day] || []).join('\n');
}

function saveWorkout() {
    const day = document.getElementById('editDaySelect').value;
    const text = document.getElementById('editWorkoutText').value;
    const newWorkout = text.split('\n').map(line => line.trim()).filter(line => line !== '');
    treinos[day] = newWorkout;
    localStorage.setItem('userTreinos_v3', JSON.stringify(treinos));
    
    if (checkedState[day]) {
        checkedState[day].indices = [];
        localStorage.setItem('checkedState_v3', JSON.stringify(checkedState));
    }
    
    renderLists();
    updateProgress();
    closeEdit();
}

function openImage(exerciseText) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('exerciseImage');
    const noImg = document.getElementById('noImageText');
    
    const exerciseName = exerciseText.split(/[-—–]/)[0].trim();
    
    document.getElementById('imageModalTitle').innerText = exerciseName;

    if (exerciseImages[exerciseName] && exerciseImages[exerciseName].trim() !== "") {
        img.src = exerciseImages[exerciseName];
        img.style.display = 'block';
        noImg.style.display = 'none';
    } else {
        img.src = '';
        img.style.display = 'none';
        noImg.style.display = 'block';
    }

    modal.style.display = 'flex';
    modal.classList.add('active-modal');
}

function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active-modal');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

window.onclick = function(event) {
    const noteModal = document.getElementById('noteModal');
    const editModal = document.getElementById('editModal');
    const imageModal = document.getElementById('imageModal');
    if (event.target == noteModal) closeNote();
    if (event.target == editModal) closeEdit();
    if (event.target == imageModal) closeImage();
}
