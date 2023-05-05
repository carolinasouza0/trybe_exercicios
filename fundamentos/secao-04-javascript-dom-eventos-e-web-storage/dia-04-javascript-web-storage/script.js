window.onload = () => {
  const setBackgroundColor = (color) => {
    const pageContent = document.querySelector(".content");
    pageContent.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  };

  const setFontColor = (fontColor) => {
    const paragraph = document.querySelector(".paragraph");
    paragraph.style.color = fontColor;
    localStorage.setItem("fontColor", fontColor);
  };

  const setFontSize = (fontSize) => {
    const paragraph = document.querySelector(".paragraph");
    paragraph.style.fontSize = fontSize;
    localStorage.setItem("fontSize", fontSize);
  };

  const setLineHeight = (lineHeight) => {
    const paragraph = document.querySelector(".paragraph");
    paragraph.style.lineHeight = lineHeight;
    localStorage.setItem("lineHeight", lineHeight);
  };

  const setFontFamily = (fontFamily) => {
    const paragraph = document.querySelector(".paragraph");
    paragraph.style.fontFamily = fontFamily;
    localStorage.setItem("fontFamily", fontFamily);
  };

  const btnBackground = document.querySelectorAll("#background-color button");
  for (let button of btnBackground) {
    button.addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML);
    });
  }

  const btnFontColor = document.querySelectorAll("#font-color button");
  for (let button of btnFontColor) {
    button.addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML);
    });
  }

  const btnFontSize = document.querySelectorAll("#font-size button");
  for (let button of btnFontSize) {
    button.addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);
    });
  }

  const btnLineHeight = document.querySelectorAll("#line-height button");
  for (let button of btnLineHeight) {
    button.addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
    });
  }

  const btnFontFamily = document.querySelectorAll("#font-family button");
  for (let button of btnFontFamily) {
    button.addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
    });
  }

  const memorize = () => {
    let backgroundColor = localStorage.getItem("backgroundColor");
    if (backgroundColor) setBackgroundColor(backgroundColor);
    let textColor = localStorage.getItem("fontColor");
    if (textColor) setFontColor(textColor);
    let textFontSize = localStorage.getItem("fontSize");
    if (textFontSize) setFontSize(textFontSize);
    let textLineHeight = localStorage.getItem("lineHeight");
    if (textLineHeight) setLineHeight(textLineHeight);
    let textFontFamily = localStorage.getItem("fontFamily");
    if (textFontFamily) setFontFamily(textFontFamily);
  };

  memorize();
};
