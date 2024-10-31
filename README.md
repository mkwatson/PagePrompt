# PagePrompt

PagePrompt is a browser bookmarklet tool that extracts text content from webpages, YouTube transcripts, or PDFs and loads it into ChatGPT or Claude as a contextual prompt. It’s a flexible tool designed for any type of content, whether technical, casual, or conversational.

## Why Fork This Repo?

To ensure that you maintain control over the script, we recommend forking this repository and hosting your own version of PagePrompt. This way, there’s no dependency on the original repository and no risk of unexpected changes. If updates are released, you can always pull them into your fork.

## Features
- **Content Detection**: Automatically identifies content types such as general webpages, YouTube transcripts, and PDF files (manual selection needed).
- **Clipboard Integration**: Copies extracted content to the clipboard for easy pasting into chat windows.
- **ChatGPT/Claude Ready**: Opens a new ChatGPT or Claude session with the content ready to be pasted as context.

## Installation

1. **Fork and Host Your Version**:
   - Fork this repository to your own GitHub account.
   - Enable GitHub Pages in your forked repository:
     - Go to **Settings** > **Pages** > Select the `main` branch and save.

2. **Add Bookmarklet**:
   - Create a new bookmark in your browser's bookmark manager.
   - Name it **PagePrompt**.
   - For the URL, paste the following code:

     ```javascript
     javascript:(function() {
         fetch("https://yourusername.github.io/PagePrompt/pageprompt.js")
         .then(response => response.text())
         .then(script => eval(script))
         .catch(error => alert("Failed to load the script: " + error));
     })();
     ```

   - Replace `https://yourusername.github.io/PagePrompt/pageprompt.js` with the URL of your hosted `pageprompt.js` file from your GitHub Pages fork.

3. **Run PagePrompt**:
   - Visit any webpage, select relevant content, then click the PagePrompt bookmarklet.
   - PagePrompt will open ChatGPT or Claude and, when pressed again on that page, will paste the selected content.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing
If you have ideas to improve PagePrompt, please submit pull requests to the original repository. You can also pull updates from the main repository into your fork if needed.

---

With PagePrompt, you can streamline gathering context from various content types and start chat sessions with better-prepared prompts in just a few clicks.
