# PagePrompt

PagePrompt is a browser bookmarklet tool that extracts all visible text content from webpages, YouTube transcripts, or PDFs and loads it into ChatGPT or Claude as a contextual prompt. Just visit a page and click the bookmarklet—no need to manually select content.

## Why Fork This Repo?

To ensure full control over the script, we recommend forking this repository and hosting your own version of PagePrompt. By doing so, you avoid dependency on the original repository and eliminate the risk of unexpected changes. If updates are released, you can always pull them into your fork.

## Features
- **One-Click Extraction**: Automatically captures all visible content on a page or PDF with a single click.
- **Content Detection**: Identifies content types such as general webpages, YouTube transcripts, and PDF files.
- **Clipboard Integration**: Copies extracted content to the clipboard for easy pasting into chat windows.
- **ChatGPT/Claude Ready**: Opens a new ChatGPT or Claude session with the content ready to be pasted as context.

## Installation

1. **Fork and Host Your Version**:
   - Fork this repository to your own GitHub account.
   - Enable GitHub Pages in your forked repository:
     - Go to **Settings** > **Pages** > Set the source to the `main` branch and save.

2. **Add Bookmarklet via Drag-and-Drop**:
   - Visit your GitHub Pages site: [PagePrompt Bookmarklet Install Page](https://mkwatson.github.io/PagePrompt).
   - Replace `YOUR-GITHUB-USERNAME` with your GitHub username.
   - On this page, you’ll find a button labeled **“Drag this to your Bookmarks Bar”**.
   - Simply drag the button to your bookmarks bar, and the bookmarklet will be installed.

3. **Run PagePrompt**:
   - Visit any webpage or PDF you want to extract content from, then click the PagePrompt bookmarklet from your bookmarks bar.
   - PagePrompt will automatically open ChatGPT or Claude, and when pressed again on that page, it will paste the full page content as context.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing
If you have ideas to improve PagePrompt, please submit pull requests to the original repository. You can also pull updates from the main repository into your fork if needed.

---

With PagePrompt, you can streamline gathering context from various content types and start chat sessions with full-page context in just a few clicks.
