javascript:(function() {
    const PROMPT_BASE = "I'm sharing content from a webpage for context. Please confirm you've received it before proceeding with any questions.";

    async function extractYouTubeTranscript() {
        const transcriptElements = document.querySelectorAll('ytd-transcript-segment-renderer');
        if (transcriptElements.length === 0) return null;

        return Array.from(transcriptElements)
            .map(segment => segment.textContent.trim())
            .join('\n');
    }

    async function extractPDFContent() {
        // Check if this is a PDF viewer page
        const pdfElements = document.querySelectorAll('.textLayer');
        if (pdfElements.length === 0) return null;

        return Array.from(pdfElements)
            .map(element => element.textContent.trim())
            .join('\n');
    }

    async function extractPageContent() {
        try {
            let content;

            // Try YouTube transcript first
            if (window.location.hostname.includes('youtube.com')) {
                content = await extractYouTubeTranscript();
            }

            // Try PDF content
            if (!content) {
                content = await extractPDFContent();
            }

            // Fall back to regular page content
            if (!content) {
                content = document.body.innerText;
            }

            // Combine with prompt base
            const fullContent = `${PROMPT_BASE}\n\n${content}`;

            // Try to copy to clipboard
            try {
                await navigator.clipboard.writeText(fullContent);
                alert('Content copied! Opening ChatGPT...');
            } catch (err) {
                // Fallback to textarea method
                const textarea = document.createElement('textarea');
                textarea.value = fullContent;
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                    alert('Content copied! Opening ChatGPT...');
                } catch (err) {
                    document.body.removeChild(textarea);
                    alert('Please press Ctrl+C/Cmd+C to copy the selected text, then click OK to continue.');
                }
            }
            
            // Open ChatGPT in a new tab
            window.open('https://chat.openai.com', '_blank');
            
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }
    
    extractPageContent();
})();