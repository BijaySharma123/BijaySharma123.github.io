// Sample JSON data (you can also fetch this from a server)
const poems = [
  {
    title: "Whispers of the Woods",
    content:
      "The woods began to whisper; About the picture it always desired; Gust of wind which touches the leaves, And drops of rain which quench the thirst Of woods. It sang the song of innocence, Of, how the world changed its cloth, How it giggled once and how it cries now, Winds whistled, sang, and danced, Everything of nature it embraced once, Now it just blows in despair! Woods began to whisper, The words unspoken, Woods began to whisper, About the world it’d always desired for!",
    author: "Bijay Sharma",
  },
  {
    title: "The Land Unseen",
    content:
      "I still search for that undiscovered land; Where river of love and peace always sings, The song unheard, the river unseen, I still search for the land which is quite pristine. I suspected the path I walked, “Dubious, dubious” my soul cried, Yet, I walked with my shivering legs, Just to see the land unknown! Does it exist in real? Or it’s a myth or a lie? Or any story that is told To those who’ve fallen from the light? I see no light in thine smile? No traces of joy I find, The darkness is covering your land, And the land of yours is unknown yet benign! Shelter is all I need, No sufferings I want, Is this the reason for you, To abstain me from your shrine? If the land unknown resides, Where happiness flows like river, Then I desire for once, Just to drown in that river!!",
    author: "Bijay Sharma",
  },
  {
    title: "Memories in the Wind",
    content:
      "Silence and chaos in their own place — Works so adversely sometimes; but The wind that once touched us, and Made us think of the inevitable — wasn't A falsehood For, life is itself the beginning of the end, And each time it decays without knowing at all, But the love that once you shared, is still with me, I'm not tired of counting the stars, for It brings the memory of yours, But the wish to see you again is — Always unfulfilled! Death bed oh my darling! It is a common place for all. But that wind still holds the memory of yours, But to accept your absence is a harder task, Hence, through the verses you'll reborn, And I'll see that beautiful smile of yours!!",
    author: "Bijay Sharma",
  },
  {
    title: "Reflections of Odreary boy",
    content:
      "Odreary boy, how do you smile In every path, where thorns lie? How do you see the joy unseen? How do you make yourself so pristine? The woods are deep where lives dwell, Chaos in day and silent in night, You get a hope, to tread in this path Where chaos is peaceful and silence’s bizarre? River flows here day and night, Without complaining - facing the plight, You are a river or a shining star That truly shines in the silent night? I am failed to identify — Inside your smile, the emptiness lie? Your art is great indeed, Sowing the seed in barren field, Yet I stare at your smile, It’s a quintessence of heaven indeed!",
    author: "Bijay Sharma",
  },
  {
    title: "Flight of the Beautiful Bird",
    content:
      "I saw a beautiful bird, Its wings were large and warm, It was indeed a messenger of peace, And its feathers were beautiful too! I, indeed, was trying to swim; For, not to drown while I still had dream, I saw it; tried to fly, Yet, so afraid to be in the sky! Finally, it took me with its height, I flew as I had dreamt, But, hesitations occurring somewhere, I stopped myself a lot, But see, how happy I was while flying! I told the bird to let me fly, Until, the light of life ends and until the life's decline, How far I flew, And I flew with it; But it was so beautiful, And how small was I! It flew away, Lost in the deep dark forest, I searched until my last hope, Still, finding the traces if I can! The nights cried and searched for it, It has already flew away, yet why look at sky? It has flew away, Leaving me behind; and winds are dull, and toxic as wine! I drank it a lot , yet no birds fly!! Or, I see a lot but not the same bird and the sky!!",
    author: "Bijay Sharma",
  },
];

let currentIndex = 0;

// Function to display the current poem
function displayPoem(index) {
  const poemListElement = document.getElementById("poem-list");
  const authorEl = document.getElementById("author");
  poemListElement.innerHTML = ""; // Clear previous content

  //   authorEl.innerHTML = `By ${poems[index].author}`;

  poems.forEach((poem, idx) => {
    const poemDiv = document.createElement("div");
    poemDiv.classList.add("poem");
    poemDiv.innerHTML = `
            <h2 class="poem-title">${poem.title}</h2>
            <p class="poem-content">${poem.content}</p>
            <p class="poem-author">By ${poem.author}</p>
        `;
    if (idx === index) {
      poemDiv.classList.add("current-poem");
    }
    poemListElement.appendChild(poemDiv);
  });
}

// Display the first poem initially
displayPoem(currentIndex);

/* Code for changing active  
            link on clicking */
var btns = $("#navigation .navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}

/* Code for changing active  
            link on Scrolling */
$(window)
  .scroll(function () {
    var distance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $(".navbar-nav a.active").removeClass("active");

        $(".navbar-nav a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
