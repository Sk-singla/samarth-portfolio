// Shared project data for both the main and details page
const projects = [
  {
    title: "Wizournal",
    description: "AI-Powered Daily Journaling App",
    details:
      "Developed an innovative Android journaling application that transforms everyday thoughts into enchanting, AI-enhanced stories. Features include AI-driven content generation, dynamic thematic backgrounds, seamless voice-to-text input using Android's native speech recognition, and robust journal management with intuitive swipe-to-delete functionality. Built with Kotlin, Jetpack Compose for UI, Room for local data persistence, Koin for dependency injection, and Gemini API for core AI capabilities.",
    image: "/projects/wizournal/cover.png?height=300&width=600",
    images: [
      { url: "/projects/wizournal/cover.png?height=300&width=600", type: "default" },
      { url: "/projects/wizournal/home_page.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/view_journal.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/record_your_day.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/record_day_listening_state.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/record_day_captured_text.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/theme_selection.jpg?height=300&width=600", type: "android" },
      { url: "/projects/wizournal/theme_selection_2.jpg?height=300&width=600", type: "android" },
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Koin", "Gemini API", "Android Speech Recognition"],
    github: "https://github.com/Sk-singla/WizardJournal",
    live: null,
  },
  {
    title: "Meme's Magic",
    description: "Social Media Android App",
    details:
      "Developed a feature-rich social media platform for meme enthusiasts with real-time messaging using WebSockets and push notifications via Firebase Cloud Messaging. Built with Kotlin, Jetpack Compose for UI, Ktor for backend, and AWS S3 for media storage.",
    image: "/projects/memes_magic/cover.png?height=300&width=600",
    images: [
      // Example: { url: "/projects/memes_magic/cover.png?height=300&width=600", type: "default" }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Ktor", "WebSockets", "AWS S3", "Firebase"],
    github: "https://github.com/Sk-singla/MemesMagicApp",
    live: null,
  },
  {
    title: "Music Genre Classification",
    description: "Techniques Analysis",
    details:
      "Analyzed various machine learning algorithms to classify music genres based on audio features extracted using Python libraries. Compared multiple classification models including Random Forest, SVM, and Neural Networks with detailed result visualization.",
    image: "/projects/music_genre_classfication/cover.png?height=300&width=600",
    images: [],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Neural Networks", "SVM", "Random Forest"],
    github: "https://github.com/Sk-singla/Music-Genre-Classification-Techniques",
    live: null,
  },
]

export default projects
