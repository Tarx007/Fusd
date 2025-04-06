const dropdowns = document.querySelectorAll('.dropdown');
const infoBox = document.getElementById('infoBox');

const languageInfo = {
  "C": `What is C?
C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.
C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
It is one of the most popular programming languages in the world.
If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc., as the syntax is similar.
C is very fast compared to other programming languages like Java and Python.
C is very versatile; it can be used in both applications and technologies.`,

  "C++": `What is C++?
C++ is an extension of the C programming language developed by Bjarne Stroustrup in the early 1980s.
It includes all aspects of C and adds object-oriented programming features like classes, inheritance, and polymorphism.
C++ is commonly used in system/software development, game engines, real-time simulations, and large-scale applications.
It supports both procedural and object-oriented programming paradigms.
Performance-wise, it is very close to C, making it ideal for performance-critical applications.
C++ provides a high level of control over system resources and memory.`,

  "Java": `What is Java?
Java is a high-level, class-based, object-oriented programming language developed by Sun Microsystems in 1995 (now owned by Oracle).
It is designed to be platform-independent using the concept of the Java Virtual Machine (JVM) – "write once, run anywhere".
Java is widely used in web development, mobile apps (especially Android), enterprise applications, and large-scale systems.
It has automatic memory management (garbage collection), robust exception handling, and a rich standard library.
Java is known for its portability, security, and scalability.`,

  "HTML": `What is HTML?
HTML stands for HyperText Markup Language and is the standard language for creating web pages.
It structures content using elements like headings, paragraphs, links, images, tables, and forms.
HTML is not a programming language – it's a markup language that defines the structure of a webpage.
It works in combination with CSS and JavaScript to create styled and interactive web experiences.
HTML5, the latest version, includes support for audio, video, and semantic elements.`,

  "CSS": `What is CSS?
CSS stands for Cascading Style Sheets and is used to style HTML documents.
It controls the layout, colors, fonts, spacing, and responsiveness of web pages.
CSS can be applied inline, internally within HTML, or externally via separate files.
It supports features like flexbox, grid, animations, and media queries for responsive design.
CSS3 introduced powerful new features like transitions, transforms, shadows, and variables.
CSS helps create visually appealing and user-friendly web interfaces.`,

  "Javascript": `What is JavaScript?
JavaScript is a lightweight, interpreted scripting language primarily used for adding interactivity to web pages.
It was created in 1995 and has become one of the core technologies of the web alongside HTML and CSS.
JavaScript can manipulate the DOM (Document Object Model), respond to user events, validate forms, and communicate with servers (AJAX).
Modern JavaScript (ES6 and beyond) supports features like classes, modules, arrow functions, promises, and async/await.
It is widely used in frontend frameworks like React, Vue, and Angular, and also for backend development via Node.js.
JavaScript is essential for dynamic, interactive web applications.`
};

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  menu.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      const lang = option.dataset.value;
      const info = languageInfo[lang];

      if (info) {
        const formattedInfo = info.replace(/\n/g, "<br>");
        infoBox.innerHTML = `<h2>${lang}</h2><p>${formattedInfo}</p>`;
        infoBox.style.display = 'block';
      } else {
        infoBox.innerHTML = "";
        infoBox.style.display = 'none';
      }

      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.querySelector('.caret').classList.remove('caret-rotate');
          other.querySelector('.menu').classList.remove('menu-open');
        }
      });
    });
  });
});
