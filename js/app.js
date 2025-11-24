// ============================================
// ACTIVIDAD 1: CORRECCIÓN DE COLOCACIONES
// ============================================

const correctionsActivity1 = [
    { incorrect: "frenar", correct: "calmar" },
    { incorrect: "juega", correct: "toca" },
    { incorrect: "fuertemente", correct: "altamente" },
    { incorrect: "metal", correct: "hierro" },
    { incorrect: "grandiosa", correct: "copiosa" },
    { incorrect: "techo", correct: "cielo" },
    { incorrect: "sujetarse", correct: "mantenerse" },
    { incorrect: "congelado", correct: "helado" }
];

let activity1Score = 0;

function normalizeText(text) {
    return text.toLowerCase().trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
}

function checkCorrection(index) {
    const sentenceItem = document.querySelectorAll('.sentence-item')[index];
    const input = sentenceItem.querySelector('.input-correction');
    const feedback = sentenceItem.querySelector('.feedback');
    const userAnswer = normalizeText(input.value);
    const correctAnswer = normalizeText(correctionsActivity1[index].correct);
    
    if (userAnswer === correctAnswer) {
        feedback.textContent = "✓ ¡Correcto!";
        feedback.className = "feedback correct";
        input.style.borderColor = "#2e7d32";
        input.disabled = true;
        sentenceItem.querySelector('.btn-check').disabled = true;
        
        // Update score
        if (!sentenceItem.classList.contains('completed')) {
            activity1Score++;
            sentenceItem.classList.add('completed');
            updateActivity1Score();
        }
    } else {
        feedback.textContent = "✗ Incorrecto. Intenta de nuevo.";
        feedback.className = "feedback incorrect";
        input.style.borderColor = "#d32f2f";
    }
}

function updateActivity1Score() {
    document.getElementById('score1').textContent = activity1Score;
}

// ============================================
// ACTIVIDAD 2: CLASIFICACIÓN DE COLOCACIONES
// ============================================

let draggedElement = null;

function setupDragAndDrop() {
    const draggableItems = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    this.classList.remove('drag-over');
    
    if (draggedElement) {
        this.appendChild(draggedElement);
    }
    
    return false;
}

function checkClassification() {
    const dropZones = document.querySelectorAll('.drop-zone');
    let correct = 0;
    let total = 0;
    
    dropZones.forEach(zone => {
        const category = zone.getAttribute('data-category');
        const items = zone.querySelectorAll('.draggable-item');
        
        items.forEach(item => {
            total++;
            const itemCategory = item.getAttribute('data-category');
            
            if (itemCategory === category) {
                correct++;
                item.style.background = '#c8e6c9';
                item.style.borderColor = '#2e7d32';
                item.style.color = '#2e7d32';
            } else {
                item.style.background = '#ffcdd2';
                item.style.borderColor = '#d32f2f';
                item.style.color = '#d32f2f';
            }
        });
    });
    
    const feedback = document.getElementById('classification-feedback');
    const percentage = Math.round((correct / total) * 100);
    
    if (correct === total) {
        feedback.innerHTML = `🎉 <strong>¡Perfecto!</strong> Has clasificado correctamente todas las colocaciones (${correct}/${total})`;
        feedback.style.color = '#2e7d32';
        feedback.style.background = '#c8e6c9';
        feedback.style.padding = '15px';
        feedback.style.borderRadius = '8px';
    } else {
        feedback.innerHTML = `Has acertado <strong>${correct}</strong> de <strong>${total}</strong> colocaciones (${percentage}%). Revisa las marcadas en rojo.`;
        feedback.style.color = '#856404';
        feedback.style.background = '#fff3cd';
        feedback.style.padding = '15px';
        feedback.style.borderRadius = '8px';
    }
}

// ============================================
// ACTIVIDAD 3: COMPLETAR CON LA COLOCACIÓN CORRECTA
// ============================================

const correctAnswersActivity3 = [
    "hizo",      // 0: hizo una promesa
    "tomó",      // 1: tomó una decisión
    "hace",      // 2: hace preguntas
    "se prendió", // 3: se prendió fuego
    "dio",       // 4: dio una charla
    "cometí",    // 5: cometí errores
    "me den",    // 6: me den un susto
    "llevar"     // 7: para llevar
];

function checkActivity3() {
    let correct = 0;
    const total = correctAnswersActivity3.length;
    
    correctAnswersActivity3.forEach((answer, index) => {
        const questionItem = document.querySelector(`.question-item[data-question="${index}"]`);
        const selectedOption = questionItem.querySelector(`input[name="q${index}"]:checked`);
        const feedback = questionItem.querySelector('.question-feedback');
        const options = questionItem.querySelectorAll('.option');
        
        // Reset styles
        options.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
        
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const optionLabel = selectedOption.closest('.option');
            
            if (normalizeText(userAnswer) === normalizeText(answer)) {
                correct++;
                optionLabel.classList.add('correct');
                feedback.textContent = "✓ ¡Correcto!";
                feedback.className = "question-feedback correct";
            } else {
                optionLabel.classList.add('incorrect');
                feedback.textContent = `✗ Incorrecto. La respuesta correcta es: "${answer}"`;
                feedback.className = "question-feedback incorrect";
                
                // Highlight correct answer
                options.forEach(opt => {
                    const input = opt.querySelector('input');
                    if (normalizeText(input.value) === normalizeText(answer)) {
                        opt.classList.add('correct');
                    }
                });
            }
        } else {
            feedback.textContent = "⚠ No has seleccionado ninguna opción";
            feedback.className = "question-feedback incorrect";
        }
    });
    
    const scoreElement = document.getElementById('activity3-score');
    const percentage = Math.round((correct / total) * 100);
    
    if (correct === total) {
        scoreElement.innerHTML = `🎉 <strong>¡Excelente!</strong> Has respondido correctamente todas las preguntas (${correct}/${total})`;
        scoreElement.style.color = '#2e7d32';
    } else {
        scoreElement.innerHTML = `Has acertado <strong>${correct}</strong> de <strong>${total}</strong> preguntas (${percentage}%)`;
        scoreElement.style.color = '#667eea';
    }
}

// ============================================
// ACTIVIDAD 4: ESCRIBE TU DIARIO
// ============================================

const collocationsToDetect = [
    "calmar la sed", "toca la guitarra", "altamente cualificado", 
    "salud de hierro", "comida copiosa", "cielo de la boca", 
    "mantenerse informado", "quedé helado", "quedarse helado",
    "tener fiebre", "estar bajo presión", "sentir vergüenza", 
    "pasar frío", "coger una gripe", "tener miedo",
    "filete de merluza", "chusco de pan", "cuña de queso",
    "hizo una promesa", "hacer una promesa", "tomó una decisión", 
    "tomar una decisión", "hace preguntas", "hacer preguntas",
    "se prendió fuego", "prenderse fuego", "dio una charla", 
    "dar una charla", "cometí errores", "cometer errores",
    "me den un susto", "dar un susto", "para llevar"
];

function countWords(text) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

function detectCollocations(text) {
    const normalizedText = normalizeText(text);
    let foundCollocations = [];
    
    collocationsToDetect.forEach(collocation => {
        const normalizedCollocation = normalizeText(collocation);
        if (normalizedText.includes(normalizedCollocation)) {
            foundCollocations.push(collocation);
        }
    });
    
    // Remove duplicates
    return [...new Set(foundCollocations)];
}

function updateDiaryCounters() {
    const text = document.getElementById('diaryText').value;
    const wordCount = countWords(text);
    const collocations = detectCollocations(text);
    
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('collocationCount').textContent = collocations.length;
    
    // Visual feedback
    const wordCountElement = document.getElementById('wordCount');
    const collocationCountElement = document.getElementById('collocationCount');
    
    // Word count feedback
    if (wordCount >= 100 && wordCount <= 150) {
        wordCountElement.style.color = '#2e7d32';
    } else if (wordCount > 150) {
        wordCountElement.style.color = '#f57c00';
    } else {
        wordCountElement.style.color = '#667eea';
    }
    
    // Collocation count feedback
    if (collocations.length >= 5) {
        collocationCountElement.style.color = '#2e7d32';
    } else {
        collocationCountElement.style.color = '#d32f2f';
    }
}

function submitDiary() {
    const text = document.getElementById('diaryText').value.trim();
    const feedback = document.getElementById('diary-feedback');
    
    if (text.length === 0) {
        feedback.innerHTML = "⚠ Por favor, escribe tu texto antes de enviarlo.";
        feedback.className = "error";
        return;
    }
    
    const wordCount = countWords(text);
    const collocations = detectCollocations(text);
    
    let messages = [];
    let hasErrors = false;
    
    // Check word count
    if (wordCount < 100) {
        messages.push(`📝 Tu texto tiene ${wordCount} palabras. Necesitas al menos 100 palabras.`);
        hasErrors = true;
    } else if (wordCount > 150) {
        messages.push(`📝 Tu texto tiene ${wordCount} palabras. Se recomienda entre 100-150 palabras.`);
    } else {
        messages.push(`✓ Longitud perfecta: ${wordCount} palabras.`);
    }
    
    // Check collocations
    if (collocations.length < 5) {
        messages.push(`📚 Has usado ${collocations.length} colocaciones. Necesitas al menos 5.`);
        hasErrors = true;
    } else {
        messages.push(`✓ Has usado ${collocations.length} colocaciones correctamente.`);
    }
    
    if (collocations.length > 0) {
        messages.push(`<br><strong>Colocaciones detectadas:</strong> ${collocations.join(', ')}`);
    }
    
    // Display feedback
    if (!hasErrors) {
        feedback.innerHTML = `
            <h3>🎉 ¡Excelente trabajo!</h3>
            <p>${messages.join('<br>')}</p>
            <p><strong>Tu diario ha sido completado exitosamente.</strong></p>
        `;
        feedback.className = "success";
        
        // Save to localStorage
        saveDiary(text, wordCount, collocations.length);
    } else {
        feedback.innerHTML = `
            <h3>⚠ Revisa tu texto</h3>
            <p>${messages.join('<br>')}</p>
        `;
        feedback.className = "warning";
    }
}

function saveDiary(text, wordCount, collocationCount) {
    const diaryEntry = {
        text: text,
        wordCount: wordCount,
        collocationCount: collocationCount,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('diary_entry', JSON.stringify(diaryEntry));
    console.log('Diario guardado en localStorage');
}

function loadDiary() {
    const saved = localStorage.getItem('diary_entry');
    if (saved) {
        const diaryEntry = JSON.parse(saved);
        document.getElementById('diaryText').value = diaryEntry.text;
        updateDiaryCounters();
        console.log('Diario cargado desde localStorage');
    }
}

// ============================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Aplicación de colocaciones inicializada');
    
    // Setup drag and drop for Activity 2
    setupDragAndDrop();
    
    // Setup diary text area
    const diaryText = document.getElementById('diaryText');
    if (diaryText) {
        diaryText.addEventListener('input', updateDiaryCounters);
        loadDiary(); // Load saved diary if exists
        updateDiaryCounters(); // Update counters on load
    }
    
    // Add click functionality to help chips
    const helpChips = document.querySelectorAll('.help-chip');
    helpChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const text = this.textContent;
            const textarea = document.getElementById('diaryText');
            const currentText = textarea.value;
            
            // Insert at cursor position or at the end
            const cursorPos = textarea.selectionStart;
            const textBefore = currentText.substring(0, cursorPos);
            const textAfter = currentText.substring(cursorPos);
            
            textarea.value = textBefore + text + textAfter;
            textarea.focus();
            textarea.selectionStart = cursorPos + text.length;
            textarea.selectionEnd = cursorPos + text.length;
            
            updateDiaryCounters();
        });
    });
    
    // Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize Activity 1 score
    updateActivity1Score();
    
    console.log('✅ Todas las actividades están listas');
});

// Prevent accidental page refresh
window.addEventListener('beforeunload', function (e) {
    const diaryText = document.getElementById('diaryText').value;
    if (diaryText.trim().length > 0) {
        // Save before leaving
        saveDiary(diaryText, countWords(diaryText), detectCollocations(diaryText).length);
    }
});
