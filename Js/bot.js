const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'

Typebot.initBubble({
  typebot: "bot-proex-okno2zz",
  theme: { button: { backgroundColor: "#0042DA" } },
});
`;
document.body.append(typebotInitScript);