import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
    chatflowid: "a0bcd9b4-0dff-49a5-8a69-0f0fd34f351e",
    apiHost: "https://aig.voxia.id",
    chatflowConfig: {
        // topK: 2
    },
    observersConfig: {
        // (optional) Allows you to execute code in parent based upon signal observations within the chatbot.
        // The userinput field submitted to bot ("" when reset by bot)
        observeUserInput: (userInput) => {
            console.log({ userInput });
        },
        // The bot message stack has changed
        observeMessages: (messages) => {
            console.log({ messages });
        },
        // The bot loading signal changed
        observeLoading: (loading) => {
            console.log({ loading });
        },
    },
    theme: {
        button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: 48, // small | medium | large | number
            dragAndDrop: true,
            iconColor: "white",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            autoWindowOpen: {
                autoOpen: false, //parameter to control automatic window opening
                openDelay: 2, // Optional parameter for delay time in seconds
                autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
            },
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: "Halo! 👋",
            tooltipBackgroundColor: "black",
            tooltipTextColor: "white",
            tooltipFontSize: 16,
        },
        disclaimer: {
            title: "Disclaimer",
            message: "Dengan menggunakan chatbot ini, Anda menyetujui <a target='_blank' href='https://flowiseai.com/terms'>Syarat & Ketentuan</a>",
            textColor: "black",
            buttonColor: "#3b82f6",
            buttonText: "Mulai Chat",
            buttonTextColor: "white",
            blurredBackgroundColor: "rgba(0, 0, 0, 0.4)", //The color of the blurred background that overlays the chat interface
            backgroundColor: "white",
            denyButtonText: "Batal",
            denyButtonBgColor: "#ef4444",
        },
        form: {
            backgroundColor: "white",
            textColor: "black",
        },
        customCSS: ``, // Add custom CSS styles. Use !important to override default styles
        chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: "VOXIA agent",
            titleAvatarSrc: "https://avatars.githubusercontent.com/u/240184483?s=200&v=4",
            titleBackgroundColor: "#3B81F6",
            titleTextColor: "#ffffff",
            welcomeMessage: "Halo! Ada yang bisa saya bantu mengenai VOXIA?",
            errorMessage: "Maaf, terjadi kesalahan.",
            backgroundColor: "#ffffff",
            backgroundImage: "enter image path or link", // If set, this will overlap the background color of the chat window.
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: ["Apa itu VOXIA?", "Bagaimana cara berlangganan?"], // It overrides the starter prompts set by the chat flow passed
            starterPromptFontSize: 15,
            clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads
            sourceDocsTitle: "Sumber:",
            renderHTML: true,
            botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "https://avatars.githubusercontent.com/u/240184483?s=200&v=4",
            },
            userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: "Ketik pertanyaan Anda",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
                maxChars: 50,
                maxCharsWarningMessage: "Anda melebihi batas karakter. Harap masukkan kurang dari 50 karakter.",
                autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                sendMessageSound: true,
                // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                receiveMessageSound: true,
                // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
            },
            feedback: {
                color: "#303235",
            },
            dateTimeToggle: {
                date: true,
                time: true,
            },
            footer: {
                textColor: "#303235",
                text: "Ditenagai oleh",
                company: "VOXIA",
                companyLink: "https://voxia.id",
            },
        },
    },
});
