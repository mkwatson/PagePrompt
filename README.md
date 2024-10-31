# PagePrompt

PagePrompt is a browser bookmarklet tool that extracts text content from webpages, YouTube transcripts, or PDFs and loads it into ChatGPT or Claude as a contextual prompt. It’s a flexible tool designed for any type of content, whether technical, casual, or conversational.

## Features
- **Content Detection**: Automatically identifies content types such as general webpages, YouTube transcripts, and PDF files (manual selection needed).
- **Clipboard Integration**: Copies extracted content to the clipboard for easy pasting into chat windows.
- **ChatGPT/Claude Ready**: Opens a new ChatGPT or Claude session with the content ready to be pasted as context.

## Installation

1. **Add Bookmarklet**:
   - Create a new bookmark in your browser's bookmark manager.
   - Name it **PagePrompt**.
   - For the URL, paste the following code:

     ```javascript
     javascript:(function() {
         fetch("https://username.github.io/PagePrompt/pageprompt.js")
         .then(response => response.text())
         .then(script => eval(script))
         .catch(error => alert("Failed to load the script: " + error));
     })();
     ```
   - Replace `https://username.github.io/PagePrompt/pageprompt.js` with your hosted script’s URL.

2. **Run PagePrompt**:
   - Visit any webpage, select relevant content, then click the PagePrompt bookmarklet.
   - PagePrompt will open ChatGPT or Claude and, when pressed again on that page, will paste the selected content.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributions
Contributions are welcome! Please submit pull requests or report issues in the repository.

---

With PagePrompt, you can streamline gathering context from various content types and start chat sessions with better-prepared prompts in just a few clicks.
