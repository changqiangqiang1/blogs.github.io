<template>
	 <div class="typing-container">
        <p class="typing-text">第一行文本。</p>
        <p class="typing-text">第二行文本。</p>
        <p class="typing-text">第三行文本。</p>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const texts = [
        "第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。第一行文本。",
        "第二行文本。",
        "第三行文本。"
    ];
    const typingTextElements = document.querySelectorAll('.typing-text');
    let index = 0;
    
    function typeText(element, text, delay) {
        let charIndex = 0;
        element.textContent = '';

        function type() {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust the typing speed here
            }
        }
        
        setTimeout(type, delay);
    }

    typingTextElements.forEach((element, i) => {
        typeText(element, texts[i], i * 5000); // Adjust delay for each line
    });
})


</script>

<style>
.typing-container {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    white-space: pre-wrap;
    overflow: hidden;
    
}

.typing-text {
    /* display: inline; */
    overflow: hidden;
    white-space: pre-wrap;
    animation: typing 4s steps(40, end) 1s 1 normal both,
               /* blink-caret 0.75s step-end infinite; */
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: black; }
}

</style>
