// Complete Webchat Script for VOXIA
// Version: 251128_WebchatComplete_v01.js
// Last Updated: 2025-11-28

import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

// Initialize VOXIA Webchat
Chatbot.init({
    chatflowid: "a0bcd9b4-0dff-49a5-8a69-0f0fd34f351e",
    apiHost: "https://aig.voxia.id",
    chatflowConfig: {
        // Configuration for chat flow
        // topK: 2
    },
    observersConfig: {
        // Event observers for monitoring chat interactions
        observeUserInput: (userInput) => {
            console.log({ userInput });
        },
        observeMessages: (messages) => {
            console.log({ messages });
        },
        observeLoading: (loading) => {
            console.log({ loading });
        },
    },
    theme: {
        button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: true,
            iconColor: "white",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            autoWindowOpen: {
                autoOpen: false,
                openDelay: 2,
                autoOpenOnMobile: false,
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
            blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundColor: "white",
            denyButtonText: "Batal",
            denyButtonBgColor: "#ef4444",
        },
        form: {
            backgroundColor: "white",
            textColor: "black",
        },
        customCSS: ``,
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
            backgroundImage: "enter image path or link",
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: ["Apa itu VOXIA?", "Bagaimana cara berlangganan?"],
            starterPromptFontSize: 15,
            clearChatOnReload: false,
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
                autoFocus: true,
                sendMessageSound: true,
                receiveMessageSound: true,
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

// Export for module usage
export default Chatbot;