javascript:(function() {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy text: " + err);
        });
    }

    function getYouTubeTranscript() {
        let transcriptText = "";
        document.querySelectorAll("#transcript [aria-label]").forEach(node => {
            transcriptText += node.innerText + "\n";
        });
        return transcriptText || "No transcript found.";
    }

    function getPDFText() {
        alert("Due to browser limitations, PDF extraction isn’t directly supported. Please select and copy text manually.");
        return "";
    }

    function getPageText() {
        return window.getSelection().toString() || document.body.innerText;
    }

    let url = window.location.href;
    let textToCopy = "";
    let promptBase = "You are an expert summarizer. Please provide a concise summary of the following content, focusing on key points, main ideas, and any important details. Keep the summary brief and informative, using simple language where possible.\n\n";

    if (url.includes("youtube.com/watch")) {
        textToCopy = getYouTubeTranscript();
    } else if (url.endsWith(".pdf")) {
        textToCopy = getPDFText();
    } else if (url.includes("chat.openai.com") || url.includes("claude.ai")) {
        let promptField = document.querySelector("textarea") || document.querySelector("input[type='text']");
        navigator.clipboard.readText().then(text => {
            promptField.value = text;
            promptField.focus();
        }).catch(err => alert("Could not read clipboard: " + err));
        return;
    } else {
        textToCopy = getPageText();
    }

    if (textToCopy) {
        copyToClipboard(`${promptBase}${textToCopy}`);
        window.open("https://chat.openai.com/", "_blank");
    }
})();
