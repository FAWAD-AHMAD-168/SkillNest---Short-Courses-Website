
document.addEventListener('DOMContentLoaded', function() {
const buttons=document.querySelectorAll(".category-filter button");
const courses=document.querySelectorAll(".course-card");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const category=button.getAttribute('data-category');
        buttons.forEach(btn => btn.classList.remove('active'));

        
        button.classList.add('active');
        courses.forEach(course=>{
            if (category === 'all' || course.getAttribute('data-category') === category) {
                course.classList.remove('hidden');
              } else {
                course.classList.add('hidden');
                
              }
              

        })
    })
})






});

