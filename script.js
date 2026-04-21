const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('command-input');

// Focus input whenever user clicks anywhere on the page
document.addEventListener('click', () => input.focus());

const asciiArt = `
 _____                              _____                   _ 
| ___ \\                            |  __ \\                 | |
| |_/ / __ __ _ _ __   __ ___   __ | |  \\/ ___  _   _  __ _| |
|  __/ '__/ _\` | '_ \\ / _\` \\ \\ / / | | __ / _ \\| | | |/ _\` | |
| |  | | | (_| | | | | (_| |\\ V /  | |_\\ \\ (_) | |_| | (_| | |
\\_|  |_|  \\__,_|_| |_|\\__,_| \\_/    \\____/\\___/ \\__, |\\__,_|_|
                                                 __/ |        
                                                |___/   
`;

const welcomeMessage = `
<pre>${asciiArt}</pre>
<div class="response-text">
    Welcome to my portfolio! <br>
    Type <span class="clickable" onclick="executeCommand('help')">'help'</span> to see a list of available commands, or try typing <span class="clickable" onclick="executeCommand('about')">'about'</span>.
</div>
`;

// Initialize terminal
output.innerHTML = welcomeMessage;

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        executeCommand(command);
    }
});

function executeCommand(command) {
    // Print the user's command to the screen
    output.innerHTML += `<div><span class="prompt">guest@goyal:~$</span> ${command}</div>`;
    
    // Process the command
    let response = '';
    switch(command.toLowerCase()) {
        case 'help':
            response = `Available commands:<br>
            - <span class="clickable" onclick="executeCommand('about')">about</span>: Learn more about me<br>
            - <span class="clickable" onclick="executeCommand('projects')">projects</span>: View my projects<br>
            - <span class="clickable" onclick="executeCommand('photography')">photography</span>: See my photography portfolio<br>
            - <span class="clickable" onclick="executeCommand('music')">music</span>: Check out what I have been listening to and playing on the drums<br>
            - <span class="clickable" onclick="executeCommand('clear')">clear</span>: Clear the terminal window`;
            break;
        case 'contact':
            response = `
            <a href='mailto:goyalp@umich.edu' class="clickable_ext"> Email </a> <br>
            <a href='https://linkedin.com/in/pranav-goy4l' class="clickable_ext"> LinkedIn </a> <br>
            <a href='https://github.com/goy4l' class="clickable_ext"> GitHub </a>
            `;
            break;
        case 'about':
            response = `
            Hi! My name is Pranav Goyal. I am a junior at the University of Michigan studying Computer Engineering. I'm an avid builder, creator and artist. <br><br>

            My interests lie in embedded systems, and their application in deep tech. I believe in leveraging AI to solve complex problems across automotive, aerospace and cyber resiliance spaces.
            I am also deeply interested in next-generation computer architecture, and designing systems built for the modern era. <br><br>

            I am always excited to tackle new challenges. Get in touch with me <span class="clickable" onclick="executeCommand('contact')">here</span>. You can also find out more about my <span class="clickable" onclick="executeCommand('experience')">experience</span>, or \
            about my on campus <span class="clickable" onclick="executeCommand('campus')">involvement</span>.
            `;
            break;
        case 'campus':
            response = `
            I co-direct the <a class="clickable_ext" href='https://shiftcreator.space'>Shift Creator Space at UMich</a>, a tight-knit community of hackers, developers, artists and creators building some of the coolest projects (prev. LineLeap, DeepGram etc.) on campus. <br><br>
            I am also the former VP of professional development at <a class="clickable_ext" href='https://tauepsilonkappa.com'>Tau Epsilon Kappa</a>, a professional technology fraternity. I led professional development efforts, like industry events, resume reviews and hackathons for >60 members.
            `
            break;
        case 'projects':
            response = "Highlights of my work: <br>1. Insert super cool project.<br>2. <a href='https://github.com' target='_blank' style='color: #729FCF;'>Find more at my GitHub</a>";
            break;
        case 'photography':
            response = `
            I am a bird and wildlife photographer. I also dabble in aviation photography. You can check out my work on <a href='https://instagram.com/goy4l' class="clickable_ext">Instagram</a>.
            `
            break;
        case 'music':
            response = `I play the drums for an awesome band called This Side Up! Follow us on <a href='https://instagram.com/thissideupband' class="clickable_ext" >Instagram</a>.`;
            break;
        case 'experience':
            response = `
            <h4>Microsoft</h4>
            
            I built an <a class="clickable_ext" href="https://github.com/MSFT-Innovation-Hub-India/Shop-The-Look-Retail-UsingImageSearch-MultiModal" >agentic solution for apparel retail</a>, which allows users to search through a clothing catalog using natural language, voice or image search. This solution was deployed on Docker for e-commerce applications and a custom robot for in-store experiences. I also built a customer service receptionist robot,
            with facial recognition for quick customer service. <br>

            <h4>Commvault</h4>

            I developed ML models for ransomware detection in data backups. This model alerts customers of potential ransomware activity based on commonly identified markers for ransomware on a filesystem. The model consisted of a soft voting system with a suite of multiple modules, trained on real world, anonymized data. Currently used in production.<br>

            <h4>Tata Motors</h4>

            Incoming Summer 2026 (Connected Cars)
            `
            break;
        case 'articles':
            response = `
            
            Interesting articles I have been reading recently: <br>

            <ul>
                <li><a href='' class='clickable_ext'>Article 1</a></li>

            </ul>
            
            `
            break;
        case 'clear':
            output.innerHTML = '';
            input.value = '';
            return; // Exit early to avoid adding empty response div
        default:
            if(command === '') break;
            response = `Command not found: ${command}. Type <span class="clickable" onclick="executeCommand('help')">'help'</span> to see what you can do.`;
    }

    if (response) {
        output.innerHTML += `<div class="response-text">${response}</div>`;
    }

    // Scroll to the bottom and clear input
    terminal.scrollTop = terminal.scrollHeight;
    input.value = '';
    input.focus();
}