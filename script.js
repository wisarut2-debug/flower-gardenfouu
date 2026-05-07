const text = "Our Little Garden 🌸";

let i = 0;

/* title */

function typeWriter() {

  if (i < text.length) {

    document
      .getElementById("title")
      .innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 80);
  }
}

typeWriter();

/* stories */

const stories = [

  {
    title: "🌱 Day 1",

    text:
    "ผมเริ่มทักทายพี่โดยคำว่า หวัดดี ครับ"
  },

  {
    title: "🌼 1 Week",

    text:
    "ผมเริ่มคุยกับพี่มากขึ้น และผมคิดว่าพี่เป็นคนที่น่ารักมาก"
  },

  {
    title: "🌷 Week 2",

    text:
    "การได้คุยมากขึ้น ค่อยๆกลายเป็นช่วงเวลาที่ผมชอบที่สุด"
  },

  {
    title: "🌹 Week 3",

    text:
    "ผมไม่ทันสังเกตว่ามันเกิดขึ้นเมื่อไหร่...\nแต่เริ่มรู้สึกว่ามีบางอย่างแตกต่างออกไปจากวันแรกที่เราคุยกัน"
  },

  {
    title: "🌸 One Month (Now)",

    text:
    "ตอนนี้ในใจของผม มันเหมือนสวนดอกไม้ที่สวยมากๆ\nและที่มันสวยขนาดนี้ เพราะมันมีพี่อยู่ในนั้นนะครับ\n\nแทนชอบพี่นะครับ"
  }

];

let currentStory = 0;

/* start */

function startStory() {

  const music =
    document.getElementById("bgMusic");

  music.volume = 0.15;

  music.play();

  document
    .getElementById("page1")
    .classList.remove("active");

  setTimeout(() => {

    document
      .getElementById("storyPage")
      .classList.add("active");

    showStory();

  }, 800);
}

/* show */

function showStory() {

  document
    .getElementById("storyTitle")
    .innerText =
      stories[currentStory].title;

  document
    .getElementById("storyText")
    .innerText =
      stories[currentStory].text;

  if (
    currentStory === stories.length - 1
  ) {

    document
      .getElementById("nextBtn")
      .innerText = "Flower 🌸";
  }
}

/* next */

function nextStory() {

  const card =
    document.querySelector(".story-card");

  card.style.opacity = 0;

  card.style.transform =
    "translateY(20px)";

  setTimeout(() => {

    currentStory++;

    if (
      currentStory < stories.length
    ) {

      showStory();

      card.style.opacity = 1;

      card.style.transform =
        "translateY(0)";

    } else {

      document
        .getElementById("storyPage")
        .classList.remove("active");

      setTimeout(() => {

        document
          .getElementById("flowerPage")
          .classList.add("active");

      }, 600);
    }

  }, 500);
}