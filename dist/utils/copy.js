export const copyToClipboard = async (text, callback) => {
    if (navigator.clipboard && window.isSecureContext) {
        if (callback) {
            await navigator.clipboard.writeText(text);
            return callback();
        }
        return await navigator.clipboard.writeText(text);
    }
    else {
        // Fallback for older browsers
        let textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom in Safari
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            // Attempt to use execCommand for clipboard actions
            let successful = document.execCommand("copy");
            document.body.removeChild(textArea);
            const issuccess = await Promise.resolve(successful);
            if (issuccess && callback) {
                return callback();
            }
        }
        catch (err) {
            document.body.removeChild(textArea);
        }
    }
};
