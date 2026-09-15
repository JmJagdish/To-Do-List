📝 Modern To-Do List

A modern and responsive To-Do List web application built with HTML, CSS, and Vanilla JavaScript. The application features a clean claymorphism/neumorphic UI, persistent task storage using localStorage, task completion tracking, and a modern scrollable task interface.

✨ Features
➕ Add new tasks
⌨️ Add tasks using the Enter key
✅ Mark tasks as completed
🗑️ Delete tasks
💾 Persist tasks using LocalStorage
🔄 Tasks remain available after refreshing the page
📜 Modern scrollable task list
↓ Dynamic scroll indicator when more tasks are available
🎨 Claymorphism / neumorphic UI
📱 Responsive design for mobile and desktop
🖱️ Smooth hover and click animations
🎯 Empty tasks are prevented from being added
🎨 Font Awesome icons
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
LocalStorage API
Font Awesome
📂 Project Structure
To-Do-List
│
├── index.html
├── style.css
├── script.js
└── README.md
🚀 How to Run
1. Clone the repository
git clone https://github.com/JmJagdish/To-Do-List.git
2. Open the project

Go to the project directory:

cd modern-todo-list
3. Run the application

Simply open:

index.html

in your browser.

No backend or installation is required.

💾 LocalStorage

Tasks are stored in the browser using the LocalStorage API.

Example:

localStorage.setItem("tasks", JSON.stringify(tasks));

When the application starts, previously saved tasks are loaded:

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

This means tasks remain available even after refreshing the browser.

Note: LocalStorage is browser/device specific. Tasks are not automatically synchronized between different devices or browsers.

📋 Task Data

Each task is stored as an object:

{
  id: 1726123456789,
  text: "Learn JavaScript",
  completed: false
}

The completed property allows the application to remember whether a task has been completed.

🎨 UI Design

The application uses a claymorphism/neumorphic design with:

Soft shadows
Rounded cards
Raised buttons
Inset input field
Orange accent color
Custom checkbox
Smooth transitions
Responsive layout

The task list uses a hidden scrollbar with a dynamic scroll indicator to maintain a clean interface.

📱 Responsive Design

The UI adapts to different screen sizes:

💻 Desktop
💻 Laptop
📱 Tablet
📱 Mobile

The task container and task list automatically adjust to the available screen size.

🔮 Future Improvements

Possible future enhancements:

 Edit existing tasks
 Clear all tasks
 Filter completed/pending tasks
 Task search
 Task categories
 Due dates
 Dark mode
 Drag-and-drop task ordering
 Backend/database synchronization
 User authentication
👨‍💻 Author

Jagdish Mahanta

Frontend / Full-Stack Developer

⭐ If you find this project useful, consider giving the repository a star!
