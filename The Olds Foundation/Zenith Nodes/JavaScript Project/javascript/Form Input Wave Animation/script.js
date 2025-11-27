const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
label.innerHTML = label.innerText
.split('')
.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar