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
        Lara_comment:
        "Я просто в захваті від цього скорочувача посилань! Він надзвичайно легкий у використанні, і я завжди можу розраховувати на нього, коли мені потрібно зробити посилання більш коротким і зручним для моїх клієнтів. Я також дуже задоволена його швидкістю! Я рекомендую цей скорочувач посилань всім, хто шукає простий і надійний спосіб скоротити свої URL-адреси. Ви не пошкодуєте!",
      Julia_comment:
        "Цей скорочувач посилань - справжнє відкриття для мене. Він простий у використанні, ефективний та безпечний. Я вже рекомендувала його своїм друзям, і вони так само задоволені результатами. Дякую команді сайту за такий чудовий інструмент!",
      Hellena_comment:
        "Легко, швидко, зручно! Цей скорочувач посилань - просто чудовий. Все, що потрібно, це вставити посилання і один клік - і ви отримуєте короткий URL. Не знаю, як я раніше обходилася без нього!",
      Roman_comment:
        "Користуюся цим скорочувачем посилань протягом кількох місяців і повністю задоволений. Він працює швидко і надійно, ніколи не було проблем з посиланнями. Дуже рекомендую для всіх, хто шукає ефективний спосіб скоротити свої URL-адреси.",
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
        Lara_comment: "I'm simply amazed by this URL shortener! It's incredibly easy to use, and I can always rely on it when I need to make a link shorter and more convenient for my clients. I'm also very pleased with its speed! I recommend this URL shortener to anyone who's looking for a simple and reliable way to shorten their URLs. You won't regret it!",
        Julia_comment: "This link shortener is a real revelation for me. It is easy to use, effective and safe. I have already recommended it to my friends and they are equally happy with the results. Thanks to the site team for such a great tool!",
        Hellena_comment: "Easy, fast, convenient! This link shortener is simply awesome. All you need is to paste the link and one click - and you get a short URL. I don't know how I managed without him before!",
        Roman_comment: "I have been using this link shortener for several months now and am completely satisfied. It works fast and reliable, never had any problems with links. Highly recommended for anyone looking for an effective way to shorten their URLs.",
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