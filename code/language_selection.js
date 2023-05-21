const languageData = {
    uk: {
        Cut_URL: "Скорочувач URL",
        ukr: "УКР",
        eng: "АНГЛ",
        login: "Увійти",
        registration: "Зареєструватися",
        placeholder: "Введіть URL",
        about_us: "Про нас",
        about_us_text:
            "Скорочувачі URL - це онлайн-інструменти, які дозволяють користувачам створювати коротші, більш керовані версії довгих URL-адрес (Uniform Resource Locators), які є веб-адресами, що вказують на конкретні сторінки в Інтернеті. Ці скорочені URL-адреси часто використовуються на платформах соціальних медіа, де встановлені обмеження за кількістю символів, таких як Twitter, і також можуть використовуватися для відстеження кліків та взаємодії з певним посиланням.",
        reviews: "Відгуки",
        Lara: "Лара",
        Julia: "Юлія",
        Hellena: "Еллена",
        Roman: "Роман",
        Laras_comment: "",
        Julia_comment: "",
        Hellena_comment: "",
        Roman_comment: "",
        write_to_support: "служба підтримки",
        Login_page: "Сторінка входу",
        login_header: "Увійдіть до вашого <br/> облікового запису",
        username: "Eлектронна пошта:",
        password: "Пароль:",
        Sign_in: "Увійти",
        Registration_page: "Сторінка реєстрації",
        first_name: "Ім'я:",
        second_name: "Прізвище:",
        email: "Електронна адреса:",
        short_name: "Коротке ім'я:",
        repeat_password: "Повторіть пароль:",
        phone: "Номер телефону:",
        about_me: "Про мене:",
        choice: "Як ви дізнались про <br /> наш сервіс?",
        google_search: "Я знайшов ваш сервіс через пошук Google",
        friend_recommendation: "Друг порекомендував мені ваш сервіс",
        social_media: "Я дізнався про ваш сервіс через соціальні медіа",
        podcast_video:
            "Я дізнався про ваш сервіс з подкасту або відео, яке я дивився",
        other: "Інше",
        Register: "Зареєструватися",
    },
    en: {
        Cut_URL: "Cut URL",
        ukr: "UKR",
        eng: "ENG",
        login: "Login",
        registration: "Registration",
        placeholder: "Enter URL",
        about_us: "About us",
        about_us_text:
            "URL shorteners are online tools that allow users to create shorter, more manageable versions of long URLs (Uniform Resource Locators), which are the web addresses that point to specific pages on the internet. These shortened URLs are often used on social media platforms where character limits are imposed, such as Twitter, and can also be used to track clicks and engagement on a particular link.",
        reviews: "Reviews",
        Lara: "Lara",
        Julia: "Julia",
        Hellena: "Hellena",
        Roman: "Roman",
        Laras_comment: "",
        Julia_comment: "",
        Hellena_comment: "",
        Roman_comment: "",
        write_to_support: "write to support",
        Login_page: "Login page",
        login_header: "Log in to <br /> your account",
        username: "Short name or e-mail:",
        password: "Password:",
        Sign_in: "Sign in",
        Registration_page: "Registration page",
        first_name: "First name:",
        second_name: "Second name:",
        email: "E-mail address:",
        short_name: "Short name:",
        repeat_password: "Repeat password:",
        phone: "Phone number:",
        about_me: "About me:",
        choice: "How did you learn about our <br /> service ?",
        google_search: "I found your service through a Google search",
        friend_recommendation: "A friend recommended your service to me",
        social_media: "I discovered your service through social media",
        podcast_video:
            "I learned about your service from a podcast or video that I watched",
        other: "Other",
        Register: "Register",
    },
};

const ukrSelectors = document.querySelectorAll(".ukr-selector");
const engSelectors = document.querySelectorAll(".eng-selector");

ukrSelectors.forEach((ukrSelector) => {
    ukrSelector.addEventListener("click", () => {
        localStorage.setItem("language", "uk");
        updateLanguage("uk");
    });
});

engSelectors.forEach((engSelector) => {
    engSelector.addEventListener("click", () => {
        localStorage.setItem("language", "en");
        updateLanguage("en");
    });
});

const selectedLanguage = localStorage.getItem("language");
if (selectedLanguage) {
    updateLanguage(selectedLanguage);
}

function updateLanguage(language) {
    const data = languageData[language];
    if (data) {
        const elements = document.querySelectorAll("[data-lang]");
        elements.forEach((el) => {
            const key = el.dataset.lang;
            if (data[key]) {
                let textProperty = "innerHTML";
                if (el.tagName === "INPUT") {
                    if (el.type === "submit" || el.type === "button") {
                        textProperty = "value";
                    } else if (el.type === "text") {
                        textProperty = "placeholder";
                    }
                }
                el[textProperty] = data[key];
            }
        });
    }
    document.documentElement.lang = language;
}