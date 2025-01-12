function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHorizontal() {
    const types = ['add', 'sub', 'mul', 'muladd', 'mulsub'];
    let problem = '';
    
    switch(types[randomInt(0, 4)]) {
        case 'add':
            const a1 = randomInt(1, 50);
            const a2 = randomInt(1, Math.min(100 - a1, 50));
            problem = `${a1} + ${a2} = `;
            break;
        case 'sub':
            const s1 = randomInt(20, 100);
            const s2 = randomInt(1, Math.min(s1 - 1, 50));
            problem = `${s1} - ${s2} = `;
            break;
        case 'mul':
            const m1 = randomInt(1, 9);
            const m2 = randomInt(1, Math.min(9, Math.floor(100/m1)));
            problem = `${m1} × ${m2} = `;
            break;
        case 'muladd':
            const ma1 = randomInt(1, 9);
            const ma2 = randomInt(1, Math.min(9, Math.floor(80/ma1)));
            const ma3 = randomInt(1, Math.min(20, 100 - (ma1 * ma2)));
            problem = `${ma1} × ${ma2} + ${ma3} = `;
            break;
        case 'mulsub':
            const ms1 = randomInt(1, 9);
            const ms2 = randomInt(1, Math.min(9, Math.floor(100/ms1)));
            const ms3 = randomInt(1, Math.min(ms1 * ms2 - 1, 20));
            problem = `${ms1} × ${ms2} - ${ms3} = `;
            break;
    }
    return problem;
}

function generateVertical(i) {
    const isAdd = Math.random() > 0.5;
    let item = '';
    if (i === 3) {
        item = `\n\n`;
    }
    if (isAdd) {
        const a = randomInt(10, 50);
        const b = randomInt(10, Math.min(100 - a, 50));
        item += `${a}\n+${b}`;
    } else {
        const b = randomInt(10, 50);
        const a = randomInt(b + 1, Math.min(b + 50, 99));
        item += `${a}\n-${b}`;
    }
    return item;
}

function generatePaper() {
    // 生成横式计算
    const horizontalDiv = document.getElementById('horizontal');
    horizontalDiv.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem';
        problemDiv.textContent = generateHorizontal();
        horizontalDiv.appendChild(problemDiv);
    }
    
    // 生成竖式计算
    const verticalDiv = document.getElementById('vertical');
    verticalDiv.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const problemDiv = document.createElement('pre');
        problemDiv.className = 'vertical';
        problemDiv.textContent = generateVertical(i);
        verticalDiv.appendChild(problemDiv);
    }
}

// 页面加载时自动生成一份试卷
window.onload = generatePaper; 