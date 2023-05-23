<div align='center'>
  
# ⚡️ URL SHORTENER

**a project created by [URL SHORTENER TEAM](#)**

<br />
  
### [Check it out](#) | [Learn how it's made](#) | [Support the project](https://github.com/kYaRick/UrlShortener)
  
</div>

<br />

---

<br />

# 👋 Introduction

"Url shortener" is a file hosting and sharing service powered by [Firebase](https://firebase.google.com). Users can upload files under 20MB and download hosted files using a "share code" (a short 3 word code provided by [words-aas](https://github.com/chroline/words-aas)). After uploading a file, the file uploader can retrieve the share code and share it with others or delete the file at any time. Files will automatically be deleted after 21 days (WIP).

# 🚀 Usage

|**Upload**|
|:---:|
|![Uploading a file](./assets/ShareMethod.gif)|
|**Download**|
|![Downloading a file](./assets/DownloadMethods.gif)|

# 🧑‍💻 Development

1. 📂 Clone this repo

2. 📦 Install dependencies with `yarn`

3. 🏃 Start the Vite dev server with `yarn dev`

4. 🌎 Visit the provided link in your browser

## Firebase

Firebase is used to power the authentication, database, and file storage for URL SHORTENER. For security reasons, the production LIGHTING SHARE Firebase project is not available for local development on `localhost`. As such, you will need to create your own Firebase project for local development purposes.

On your development Firebase project:

1. Enable anonymous authentication.
2. Ensure `localhost` is an authorized domain for authentication.
3. Enable Firestore Database and Storage features.

Replace the `firebaseConfig` variable in `src/util/firebase-config.ts` with the config for your Firebase project.

# ❤️ Support this project

If you want to say thank you and/or support active development of our team:

- Add a GitHub Star to the project!
- Leave a comment or a reaction on the tutorial of how this project was built!

Thanks so much for your interest in supporting URL SHORTENER!