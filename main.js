
const questions = [
    {
        level: 1,
        text: `The Great Wall of China is visible from space.`,
        answer: "Myth",
        image: "greatwall.png",
        desc: `The Great Wall of China is not easily visible from space with the naked eye. Astronauts have mentioned that it's difficult to see without aid, and even then, it depends on various factors such as weather conditions and the observer's position. The wall is narrow and tends to blend in with the natural landscape.`
    },
    {
        level: 2,
        text: `Area 51 is a top-secret U.S. military facility where extraterrestrial technology and beings are stored.`,
        answer: "Myth",
        image: "alien.png",
        desc: `Area 51 is a highly classified U.S. military facility, but there is no credible evidence to support the idea that extraterrestrial technology or beings are stored there. The secrecy surrounding Area 51 has fueled various conspiracy theories and speculations, but the exact nature of the activities conducted there remains classified by the U.S. government.`
    },
    {
        level: 3,
        text: `Snakes are deaf and can't hear.`,
        answer: "Myth",
        image: "snake.png",
        desc: `While snakes don't have external ears like humans, they are not deaf. Snakes can detect vibrations and are sensitive to low-frequency sounds. They use various methods, such as jawbone vibrations, to pick up on auditory cues in their environment.`
    },
    {
        level: 4,
        text: `Space is completely silent.`,
        answer: "Myth", image: "stars-and-planet.png",
        desc: `In space, there is no air or atmosphere to carry sound waves, so sounds as we know them on Earth cannot be heard. However, some celestial bodies, like stars, produce sound waves in the form of vibrations that can be detected by instruments. Additionally, astronauts use communication devices that transmit signals in a way that can be interpreted as sound. So, while space itself is generally considered silent, there are nuances to it.  `
    },
    {
        level: 5,
        text: `Humans only use 10% of their brains.`,
        answer: "Myth", image: "cute-brain.png",
        desc: `Humans use much more than 10% of their brains. Neuroimaging studies have consistently shown that different areas of the brain have specific functions, and overall, the brain is active and engaged in various activities throughout the day. The idea that we only use a small fraction of our brain is a popular misconception`
    },
    {
        level: 6,
        text: `Spiders crawl into people's mouths while they sleep.`,
        answer: "Myth", image: "spider.png",
        desc: `There's no scientific evidence to support the idea that spiders crawl into people's mouths while they sleep. It's more of an urban legend or myth that tends to circulate. Spiders are generally not interested in crawling into human orifices. `
    },
    {
        level: 7,
        text: `Eating carrots can improve your night vision.`,
        answer: "Reality", image: "1-carrot.png",
        desc: `Eating carrots can indeed have a positive impact on night vision. Carrots are rich in beta-carotene, which the body converts into vitamin A. Vitamin A is essential for maintaining healthy vision, including the ability to see well in low light conditions. `
    },
    {
        level: 8,
        text: `You can't sneeze with your eyes open.`,
        answer: "Myth", image: "sneeze1.png",
        desc: `While it is a reflex for many people to close their eyes when they sneeze, it is entirely possible to sneeze with your eyes open. However, the reflex to close the eyes is a protective response to prevent particles from entering the eyes during a forceful sneeze.`
    },
    {
        level: 9,
        text: `Chewing gum takes seven years to pass through the digestive system.`,
        answer: "Myth", image: "digestive-system.png",
        desc: `Chewing gum doesn't take seven years to pass through the digestive system. While it's true that the body doesn't digest gum in the same way as food, it usually passes through the digestive tract at a similar rate to other non-digestible materials. The seven-year claim is an exaggeration.`
    },
    {
        level: 10,
        text: `If you touch a baby bird, the mother will reject it due to the human scent.`,
        answer: "Myth", image: "baby-bird.png",
        desc: `Most birds have a limited sense of smell, and the idea that a mother bird will reject its chick due to the human scent is generally not true. Birds rely more on visual and auditory cues to recognize their offspring.`
    },
    {
        level: 11,
        text: `Reading in dim light ruins your eyesight.`,
        answer: "Myth", image: "reading.png",
        desc: `Reading in dim light may cause eye strain and discomfort, but it doesn't lead to permanent damage or ruin your eyesight. However, it's generally recommended to have adequate lighting while reading to reduce eye strain and make the reading experience more comfortable.`
    },
    {
        level: 12,
        text: `Humans swallow an average of eight spiders a year while sleeping.`,
        answer: "Myth", image: "spiders.png",
        desc: `The idea that humans swallow an average of eight spiders a year while sleeping is a common misconception and has no factual basis. It's often circulated as an example of an urban legend. Spiders typically avoid humans, and there's no evidence to suggest that they deliberately crawl into people's mouths. `
    },
    {
        level: 13,
        text: `Wearing glasses too much will make your eyes dependent on them.`,
        answer: "Myth", image: "boy-wearing-glasses.png",
        desc: `Wearing glasses does not make your eyes dependent on them. Glasses are prescribed to correct refractive errors such as nearsightedness, farsightedness, or astigmatism. They help you see more clearly, but they don't change the physical structure of your eyes.`
    },
    {
        level: 14,
        text: `Cockroaches can survive a nuclear explosion.`,
        answer: "Myth", image: "cockroach.png",
        desc: `While it's true that cockroaches are known for their resilience and ability to survive harsh conditions, the idea that they can survive a nuclear explosion is an exaggeration. Cockroaches would likely be affected by the intense radiation and heat produced by a nuclear blast, just like most other living organisms.`
    },
    {
        level: 15,
        text: `Owls are able to rotate their heads 360 degrees.`,
        answer: "Myth", image: "owl.png",
        desc: `While owls have an impressive range of motion in their necks, they can't rotate their heads a full 360 degrees. They can turn their heads about 270 degrees in either direction, which is still an incredible adaptation for hunting prey. `
    },
    {
        level: 16,
        text: `Swimming after eating will give you cramps.`,
        answer: "Myth", image: "swimming.png",
        desc: `While it's a common belief that swimming after eating can lead to cramps, there's no scientific evidence to support this. It's generally safe to swim after eating, and cramps that might occur are more likely due to vigorous activity rather than the act of swimming on a full stomach.`
    },
    {
        level: 17,
        text: `Bananas are berries.`,
        answer: "Reality",
        image: "bananas.png",
        desc: `Botanically speaking, bananas are classified as berries. In botanical terms, berries are fleshy fruits produced from a single ovary, and bananas fit this definition. Although they may not fit the everyday perception of berries, bananas share botanical characteristics with other fruits in the berry category.`
    },
    {
        level: 18,
        text: `Water expands when it freezes.`,
        answer: "Reality",
        image: "river.png",
        desc: `Water is unique because it expands when it freezes. Most substances contract and become denser as they solidify, but water molecules form a crystalline structure that takes up more space than liquid water. This property is crucial for life and affects various natural phenomena, including the buoyancy of ice in bodies of water.`
    },
    {
        level: 19,
        text: `The Internet is stored in the cloud.`,
        answer: "Reality",
        image: "macbook.png",
        desc: `While the internet itself is not physically stored in the clouds, the term "cloud" refers to remote servers and data centers that are connected through the internet. Cloud computing allows users to access and store data, run applications, and perform various tasks over the internet instead of on their local devices. So, in a way, the internet relies on distributed servers and data centers, often referred to as the "cloud.`
    },
    {
        level: 20,
        text: `A penny dropped from the Empire State Building can kill a person.`,
        answer: "Myth",
        image: "noble-prize-coin.png",
        desc: `The notion that a penny dropped from the Empire State Building can be lethal is a myth. Due to the aerodynamic shape of a penny and the effect of air resistance, it doesn't gather enough speed to cause harm. In reality, the terminal velocity of a falling penny prevents it from reaching dangerous speeds.`
    },
    {
        level: 21,
        text: `Cats always land on their feet.`,
        answer: "Myth",
        image: "cute-cat.png",
        desc: `While cats have a remarkable ability to twist their bodies during a fall and often land on their feet, it is not an absolute guarantee. The "righting reflex" helps cats orient themselves mid-air, but they need sufficient time and distance to do so. Short falls may not allow them to fully correct their position.`
    },
    {
        level: 22,
        text: `Sharks don't get cancer.`,
        answer: "Myth",
        image: "shark.png",
        desc: `The belief that sharks don't get cancer is a myth. While sharks exhibit some resistance to cancer, they are not immune to the disease. Research has shown that sharks can develop tumors, although the prevalence is relatively low compared to other animals. The idea that shark cartilage can cure cancer is also unsupported by scientific evidence.`
    },
    {
        level: 23,
        text: `Venus is the hottest planet in our solar system.`,
        answer: "Reality",
        image: "planet.png",
        desc: `Venus holds the title of the hottest planet in our solar system. Despite not being the closest planet to the Sun, its thick atmosphere traps heat, creating a runaway greenhouse effect. The surface temperature on Venus is hot enough to melt lead, making it significantly hotter than even Mercury, the closest planet to the Sun.`
    },
    {
        level: 24,
        text: `Light travels faster than sound.`,
        answer: "Reality",
        image: "shattered-light-bulb.png",
        desc: `Light does indeed travel faster than sound. In a vacuum, light moves at a speed of approximately 299,792 kilometers per second (186,282 miles per second), while sound travels through air at a much slower speed, around 343 meters per second (1,125 feet per second). This difference in speed is why we see lightning before we hear thunder during a storm.`
    },
    {
        level: 25,
        text: `The Eiffel Tower can be seen from any point in Paris.`,
        answer: "Myth",
        image: "eiffel-tower.png",
        desc: `The idea that the Eiffel Tower can be seen from any point in Paris is a myth. While the Eiffel Tower is visible from many parts of the city, its visibility can be obstructed by buildings, terrain, and distance. In some areas, the tower may not be visible at all, challenging the notion of its omnipresence in the Parisian skyline.`
    },
    {
        level: 26,
        text: `Playing video games can improve cognitive abilities and decision-making skills.`,
        answer: "Reality",
        image: "game-controller.png",
        desc: `Playing video games in moderation has been associated with various cognitive benefits, including improvements in attention, spatial awareness, problem-solving skills, and decision-making. Certain types of games, especially those that involve strategy and critical thinking, can have positive effects on cognitive abilities. `
    },
    {
        level: 27,
        text: `There is a Bigfoot Easter egg in Grand Theft Auto V.`,
        answer: "Reality",
        image: "bigfoot.png",
        desc: `In Grand Theft Auto V (GTA V), there is an Easter egg related to Bigfoot. Players can discover a mission called "The Last One," where they encounter a character searching for Bigfoot in the game. The mission involves a humorous take on the myth of Bigfoot`
    },
    {
        level: 28,
        text: `Different parts of the tongue are responsible for different tastes (e.g., sweet, sour, bitter).`,
        answer: "Myth",
        image: "boy-showing-tongue.png",
        desc: `The idea that different tastes are experienced on specific parts of the tongue is a myth. All taste sensations—sweet, sour, bitter, salty, and umami—can be detected by taste buds distributed across the entire tongue. The concept of taste zones originated from a misinterpretation of early research and has been debunked by modern studies.`
    },
    {
        level: 29,
        text: `Diamonds are made from compressed coal.`,
        answer: "Myth",
        image: "diamonds.png",
        desc: `The belief that diamonds are made from compressed coal is a myth. While both diamonds and coal are formed from carbon, they undergo different geological processes. Diamonds form deep within the Earth under high pressure and temperature, while coal forms from the remains of plant material in a different set of conditions.`
    },
    {
        level: 30,
        text: `Lightning never strikes the ocean.`,
        answer: "Myth",
        image: "lightning-in-ocean.png",
        desc: `Lightning does strike the ocean. In fact, lightning frequently strikes large bodies of water, including oceans. The electrical discharge can travel through the conductive seawater. However, due to the vastness of the ocean, lightning strikes are not always easily observed, especially in the open sea.`
    },
    {
        level: 31,
        text: `Chopsticks are the primary eating utensils in all Asian countries.`,
        answer: "Myth",
        image: "noodles-with-chopsticks.png",
        desc: `While chopsticks are commonly used in many Asian countries, they are not the exclusive primary eating utensils in all of them. Different Asian cultures have their own traditional utensils, such as spoons and forks. Chopsticks are prevalent in East Asian countries like China, Japan, Korea, and Vietnam, but not universally across all Asian cultures.`
    },
    {
        level: 32,
        text: `Humans can't breathe and swallow simultaneously.`,
        answer: "Reality",
        image: "boy-breathing.png",
        desc: `It is indeed true that humans cannot breathe and swallow simultaneously. The epiglottis, a flap in the throat, prevents food and liquids from entering the windpipe during swallowing. While this mechanism protects the respiratory system, it temporarily interrupts the breathing process. Breathing resumes once the swallowing reflex is complete.`
    },
    {
        level: 33,
        text: `Goldfish have a three-second memory.`,
        answer: "Myth",
        image: "goldfish.png",
        desc: `Contrary to the popular belief that goldfish have a three-second memory, they actually have a much longer memory span. Studies have shown that goldfish can remember simple tasks and recognize their owners. While their memory is not as advanced as some other animals, it certainly exceeds the brief three-second myth.`
    },
    {
        level: 34,
        text: `The Great Wall of China is made entirely of stone.`,
        answer: "Myth",
        image: "great-wall-of-china1.png",
        desc: `The Great Wall of China is not entirely made of stone. While some sections are constructed using stone, many parts of the wall consist of other materials, including tamped earth, wood, and bricks. The construction of the wall involved various materials depending on the region and the resources available.`
    },
    {
        level: 35,
        text: `Lightning never strikes the same place twice.`,
        answer: "Myth",
        image: "lightning.png",
        desc: `Lightning can and does strike the same place multiple times. In fact, tall structures such as tall buildings and communication towers are often struck by lightning repeatedly due to their height and the path of least resistance they provide.`
    },
    {
        level: 36,
        text: `Bats are blind.`,
        answer: "Myth",
        image: "bat.png",
        desc: `Bats are not blind. While some species of bats have poor eyesight or are nocturnal, many bats have excellent vision. They use echolocation, emitting sound waves and listening to the echoes to navigate and locate prey in the dark. Their ability to see varies among species, but in general, bats are not blind.`
    },
    {
        level: 37,
        text: `Chameleons change color to blend in with their surroundings.`,
        answer: "Myth",
        image: "chameleon.png",
        desc: `Chameleons change color for various reasons, but primarily it's not for camouflage. They change color to regulate their body temperature, communicate with other chameleons, and express their mood, rather than blending in with their surroundings. Their ability to change color is a fascinating aspect of their biology.`
    },
    {
        level: 38,
        text: `Women live longer than men on average.`,
        answer: "Reality",
        image: "ada-lovelace.png",
        desc: `On average, women tend to live longer than men. It's a well-documented demographic trend observed globally. Factors such as biology, genetics, and lifestyle contribute to the differences in life expectancy between men and women.`
    },
    {
        level: 39,
        text: `Tigers are excellent swimmers and enjoy being in the water.`,
        answer: "Reality",
        image: "tiger.png",
        desc: `Tigers are strong swimmers and are known to enjoy being in the water. Unlike many other big cats, tigers are quite comfortable in aquatic environments and are known to swim across rivers and lakes. They are capable swimmers and use water as a means of cooling off or as a hunting strategy.`
    },
    {
        level: 40,
        text: `Microwaving food destroys its nutrients.`,
        answer: "Myth",
        image: "microwave.png",
        desc: `While some nutrients can be slightly affected, microwaving is generally a safe and efficient cooking method that preserves most nutrients.`
    },
    {
        level: 41,
        text: `Isaac Newton discovered gravity when an apple fell on his head.`,
        answer: "Myth", image: "isaac-newton.png",
        desc: `The apple fell to the ground next to him. Its fall helped him understand gravity.`
    },
    {
        level: 42,
        text: `It's easier to catch a cold when it's actually cold.`,
        answer: "MYTH", image: "man-sneezing.png",
        desc: `Colds are caused by viruses, not air temperature.`
    },
    {
        level: 43,
        text: `Using an alarm clock is the best way to wake up.`,
        answer: "Myth", image: "alarm-clock.png",
        desc: `Waking up suddenly is bad for you.`
    },
    {
        level: 44,
        text: `The Bermuda Triangle is a region where ships and airplanes mysteriously disappear.`,
        answer: "Myth", image: "ship.png",
        desc: `While the Bermuda Triangle has gained notoriety in popular culture as a region where ships and airplanes allegedly disappear under mysterious circumstances, there is no scientific evidence to support the existence of any unusual phenomena in this area. Many incidents attributed to the Bermuda Triangle can be explained by natural factors, human error, or normal maritime and aviation activity. It's a topic that has generated much speculation and folklore, but it's not considered a reality in terms of unexplained disappearances.`
    },
    {
        level: 45,
        text: `Nothing, not even light, can escape from a black hole.`,
        answer: "Reality", image: "black-hole.png",
        desc: `Black holes are objects with such strong gravitational forces that nothing, including light, can escape from them once it passes a certain point known as the event horizon. This phenomenon is a key characteristic of black holes in general relativity`
    },
    {
        level: 46,
        text: `All dinosaurs were extinct by the end of the Cretaceous period due to a catastrophic event, possibly an asteroid impact.`,
        answer: "Reality", image: "dinosaur.png",
        desc: `The prevailing scientific consensus is that a massive asteroid impact, combined with volcanic activity, led to the mass extinction event at the end of the Cretaceous period approximately 66 million years ago. This event caused the extinction of most dinosaurs and many other species, marking the end of the Mesozoic Era.`
    },
    {
        level: 47,
        text: `Babies are born with the ability to see and recognize faces.`,
        answer: "Reality", image: "newborn-baby.png",
        desc: `Newborns are born with the ability to see and recognize faces, particularly the faces of their caregivers. While their vision is initially blurry, infants are sensitive to high-contrast patterns, and they can focus on objects and faces at a short distance. `
    },
    {
        level: 48,
        text: `MrBeast once gave away a private island to a random subscriber.`,
        answer: "Reality", image: "island.png",
        desc: `MrBeast, also known as Jimmy Donaldson, is known for his philanthropic efforts, and he did indeed give away a private island to a random subscriber as part of one of his generous initiatives. `
    },
    {
        level: 49,
        text: `Dogs age seven years for every one human year.`,
        answer: "Myth", image: "golden-retriever.png",
        desc: `The idea that dogs age seven years for every one human year is a generalization and doesn't accurately represent the aging process of dogs. The rate at which dogs age varies depending on factors such as breed and size.`
    },
    {
        level: 50,
        text: `The Simpsons predicted several real-world events, including the election of Donald Trump as President of the United States.`,
        answer: "Reality", image: "homer-simpson.png",
        desc: `The Simpsons" did, in fact, air an episode in the year 2000 titled "Bart to the Future," in which they depicted a future scenario where Donald Trump becomes President of the United States. The show has gained attention for seemingly predicting various real-world events over the years.`
    },
];

let currentQuestionIndex = 0;
let points = 0;

// Check if there is saved progress in localStorage
const savedPoints = localStorage.getItem('points');
const savedQuestionIndex = localStorage.getItem('questionIndex');

// Use saved progress if available, otherwise use default values
points = savedPoints ? parseInt(savedPoints, 10) : 0;
currentQuestionIndex = savedQuestionIndex ? parseInt(savedQuestionIndex, 10) : 0;

// Create an Audio element for the click sound
const clickSound = new Audio('click.wav');

function showQuestion() {
    const questionContainer = document.getElementById("game-container");
    questionContainer.innerHTML = `
            <img id="logo" src="mvr2.svg" alt="logo">
                <div class="extra">
                    <p id="points">Points: ${points}</p> 
                    <p id="level">Level: ${questions[currentQuestionIndex].level}</p>
                </div>
                <img src="${questions[currentQuestionIndex].image}" alt="question">
                <h1>${questions[currentQuestionIndex].text}</h1>
                <div class="btn-container">
                <button id="myth" onclick="checkAnswer('Myth')">Myth</button>
                <button id="reality" onclick="checkAnswer('Reality')">Reality</button>
                </div>
            `;

    saveProgress();
}

function playClickSound() {
    // Play the click sound
    clickSound.play();
}

function checkAnswer(userChoice) {
    playClickSound(); // Play the sound when a button is clicked

    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userChoice === correctAnswer) {
        points += 5;
        showResult(true);
    } else {
        showResult(false);
    }
}

function triggerConfetti() {
    const duration = 5 * 1000;
    const { clientWidth, clientHeight } = document.documentElement;

    confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42'],
    });

    // Stop the confetti after a certain duration (in milliseconds)
    setTimeout(() => {
        stopConfetti();
    }, duration);
}

function stopConfetti() {
    canvasConfetti.reset();
}

function saveProgress() {
    localStorage.setItem('points', points);
    localStorage.setItem('questionIndex', currentQuestionIndex);
}



function showResult(isCorrect) {
    const questionContainer = document.getElementById("game-container");

    if (isCorrect) {
        questionContainer.innerHTML = `
                    <h1>Correct!</h1>
                    <strong>${questions[currentQuestionIndex].desc}</strong>
                    <button onclick="nextQuestion()">Next Question</button>
                `;
        triggerConfetti()
        saveProgress();
    } else {
        questionContainer.innerHTML = `
                    <h1>Incorrect!</h1>
                    <strong>${questions[currentQuestionIndex].desc}</strong>
                    <button onclick="nextQuestion()">Next Question</button>
                `;
    }
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Next level's assets are loading now
        window.CrazyGames.SDK.game.sdkGameLoadingStart();

        showQuestion();
    } else {
        // Game finished
        document.getElementById("game-container").innerHTML = `
                    <h1>Congratulations, You Finished All Levels! 🎉</h1>  
                    <p id="last_point">Points: ${points}</p> 
                    <button onclick="restartGame()">Restart Game</button>
                    <h1>If this Game gets 10k likes, I will add more 50+ Levels</h1>  
                `;
    }
}


function restartGame() {
    // Reset progress in localStorage
    localStorage.removeItem('points');
    localStorage.removeItem('questionIndex');

    // Reset variables
    currentQuestionIndex = 0;
    points = 0;

    showQuestion();
    // Assets are loaded
    window.CrazyGames.SDK.game.sdkGameLoadingStop();

}

showQuestion();
window.CrazyGames.SDK.game.sdkGameLoadingStop();