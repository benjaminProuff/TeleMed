// JavaScript
function showMessage() {
  console.log("showMessage");
  document.getElementById("chat-icon").style.display = "none";

  document.getElementById("chat-message").style.display = "block";
}

function hideMessage() {
  document.getElementById("chat-icon").style.display = "block";
  document.getElementById("chat-message").style.display = "none";
}

function typeWriter(text, element) {
  showMessage();
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 10);
}

const chatbotText = document.getElementById("messageBot");
// Replace 'p' with the correct selector for your chatbot text element
const text2 =
  "👋 Bonjour, Je suis ravi de vous accueillir sur notre projet ! 🚀 Je suis fier de vous annoncer que j'ai récemment réalisé l'intégration front-end de cette application en utilisant les technologies HTML, CSS et JavaScript. Pour rendre cela possible, j'ai pris comme base une maquette open source de la communauté Figma, qui a été une excellente source d'inspiration et de design. L'intégration front-end joue un rôle essentiel dans l'expérience utilisateur, et j'ai cherché à créer une interface conviviale et attrayante pour rendre votre expérience aussi agréable que possible. N'hésitez pas à explorer le site et à me faire part de vos retours ! Si vous avez des questions sur le processus de développement ou sur des fonctionnalités spécifiques, je suis là pour vous aider. Merci de faire partie de notre communauté et bonne navigation ! 🌟";

if (text2) {
  typeWriter(text2, chatbotText);
}
