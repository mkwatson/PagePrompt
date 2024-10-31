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
        const pdfElements = document.querySelectorAll('.textLayer');
        if (pdfElements.length === 0) return null;

        return Array.from(pdfElements)
            .map(element => element.textContent.trim())
            .join('\n');
    }

    async function copyToClipboard(text) {
        // First try the modern clipboard API
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fall back to execCommand
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                const success = document.execCommand('copy');
                document.body.removeChild(textarea);
                return success;
            } catch (err) {
                document.body.removeChild(textarea);
                return false;
            }
        }
    }

    async function extractPageContent() {
        try {
            // Open ChatGPT first (needs to be from user action)
            const chatWindow = window.open('https://chat.openai.com', '_blank');
            
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

            // Try to copy content
            const copied = await copyToClipboard(fullContent);
            
            if (copied) {
                alert('Content copied! You can now paste it into ChatGPT.');
            } else {
                const confirmCopy = confirm('Unable to automatically copy. Click OK to show content for manual copying.');
                if (confirmCopy) {
                    const textarea = document.createElement('textarea');
                    textarea.value = fullContent;
                    textarea.style.position = 'fixed';
                    textarea.style.left = '0';
                    textarea.style.top = '0';
                    textarea.style.width = '100%';
                    textarea.style.height = '100%';
                    textarea.style.zIndex = '9999';
                    document.body.appendChild(textarea);
                    textarea.select();
                    alert('Press Ctrl+C/Cmd+C to copy the content, then click OK.');
                    document.body.removeChild(textarea);
                }
            }
            
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }
    
    extractPageContent();
})();